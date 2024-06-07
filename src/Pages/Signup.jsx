import React, { useState } from "react";
import fb1 from "../images/fb1.png";
import google1 from "../images/google1.png";
import login from "../images/login.jpg";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    localStorage.setItem("signupDetails", JSON.stringify(formData));
   
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    alert("Signup successful!");
    navigate("/hikes");
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${login})` }}
    >
      <div className="w-full max-w-md p-8 mx-auto bg-white bg-opacity-25 backdrop-blur-lg backdrop-filter shadow-xl rounded-lg">
        <h1 className="text-black text-4xl font-bold capitalize text-left">
          TrailMaster
        </h1>
        <h1 className="text-black text-xl font-normal text-left mt-4">
          Start your adventure
        </h1>

        <form onSubmit={handleSubmit} className="mt-8">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            className="w-full h-10 bg-white rounded-lg shadow mb-4 px-4"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full h-10 bg-white rounded-lg shadow mb-4 px-4"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full h-10 bg-white rounded-lg shadow mb-4 px-4"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full h-10 bg-white rounded-lg shadow mb-4 px-4"
            required
          />

          <button
            type="submit"
            className="w-full h-14 bg-[#0A4649] hover:bg-[#083437] text-xl rounded-lg shadow text-white"
          >
            Sign up
          </button>
        </form>

        <h1 className="text-black text-lg font-normal mt-6 mb-2 text-center">
          Or continue with
        </h1>
        <div className="flex justify-center mb-6">
          <div className="w-28 h-px border border-black"></div>
        </div>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <img className="w-8 h-8" src={fb1} alt="Facebook" />
          <img className="w-7 h-7" src={google1} alt="Google" />
        </div>

        <div className="text-black text-lg font-extralight text-center -mt-3">
          Already Have Account?
          <a href="/login" className="ml-1 font-medium">
            Login
          </a>
        </div>
      </div>
    </section>
  );
};

export default Signup;
