import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "antd";
import tlogo from "../images/tlogo.png"

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const allData = localStorage.getItem("signupDetails");
    if (allData) {
      const data = JSON.parse(allData);
      setUsername(data.username);
      setLoggedIn(true);
    }
  }, []);

  // Set toggle menu open
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("signupDetails");
    setLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  // Nav items array
  const navItems = [
    { link: "Trails", path: "/trails" },
    { link: "Hikes", path: "/hikes" },
    { link: "Create", path: "/create" },
    { link: "Path", path: "/path" },
    { link: "Save", path: "/save" },
  ];

  return (
    <header
      className={`w-full ${
        isSticky ? "bg-white shadow-md" : "md:bg-transparent"
      } fixed top-0 left-0 right-0 z-50`}
    >
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center gap-8">
          <NavLink
            to="/"
            className="h-12 rounded-lg bg-white items-center justify-center flex font-extrabold shadow-md w-30 px-5"
          >
            <img  className="h-20 w-full" src={tlogo} alt="logo"/>

          </NavLink>
          <nav className="hidden md:flex text-lg font-medium gap-8">
            {navItems.map(({ link, path }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-green-800" : "text-black"
                }
              >
                {link}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex space-x-4 ml-auto">
            {loggedIn ? (
              <div className="flex items-center space-x-4">
                <span className="font-bold text-[#083437]">{username}</span>
                <Button onClick={handleLogout} className="bg-teal-900 text-white">
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button>
                  <NavLink to="/login" className="py-2 px-4">
                    Login
                  </NavLink>
                </Button>
                <Button className="bg-[#B4CBCC]">
                  <NavLink to="/signup" className="py-2 px-4">
                    Signup
                  </NavLink>
                </Button>
              </>
            )}
          </div>

          {/* Menu button for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} mt-4`}>
          <ul className="space-y-4 bg-[#083437] rounded-lg">
            {navItems.map(({ link, path }) => (
              <li key={path} className="text-center">
                <NavLink
                  to={path}
                  className="block text-base text-white hover:text-[#FF0000] first:font-medium cursor-pointer "
                  onClick={toggleMenu}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center mt-4 space-y-2">
            {loggedIn ? (
              <>
                <div className="flex flex-col items-center space-y-2">
                  <span className="font-bold text-white">{username}</span>
                  <Button onClick={handleLogout} className="bg-teal-900  text-white">
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              <>
                <Button className="w-full">
                  <NavLink to="/login" className="py-2 px-4 w-full text-center">
                    Login
                  </NavLink>
                </Button>
                <Button className="bg-[#B4CBCC] w-full">
                  <NavLink
                    to="/signup"
                    className="py-2 px-4 w-full text-center">
                    Signup
                  </NavLink>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
