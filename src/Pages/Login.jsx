import React, { useState } from 'react';
import fb1 from '../images/fb1.png';
import google1 from '../images/google1.png';
import login from '../images/login.jpg';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
    
    localStorage.setItem("signupDetails", JSON.stringify(formData));

    setFormData({
      username: "",
      password: "",
    });
    alert("Login successful!");
    navigate("/hikes");
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${login})` }}>
      <div className="w-full max-w-md p-8 mx-auto bg-white bg-opacity-25 backdrop-blur-lg backdrop-filter shadow-xl rounded-lg">
        <h1 className="text-black text-4xl font-bold capitalize text-left">TrailMaker</h1>
        <h1 className="text-black text-xl font-normal capitalize text-left mt-2">Start Your Adventure</h1>

        <form onSubmit={handleSubmit} className="mt-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full h-12 bg-white rounded-lg shadow px-4 mb-4"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full h-12 bg-white rounded-lg shadow px-4 mb-4"
            required
          />
          <button
            type="submit"
            className="w-full h-14 bg-[#0A4649] hover:bg-[#083437] text-xl rounded-lg shadow text-white"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between mt-2 mb-6">
          <label className="flex items-center text-black text-lg font-semibold">
            <input type="checkbox" className="mr-2 h-5 w-5" />
            Remember me
          </label>
          <h1 className="text-black text-lg font-semibold cursor-pointer">Forgot password</h1>
        </div>

        <h1 className="text-black text-lg font-normal mt-5 mb-2 text-center">Or continue with</h1>
        <div className="flex justify-center mb-6">
          <div className="w-28 h-px border border-black"></div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <img className="w-8 h-8 cursor-pointer" src={fb1} alt="Facebook" />
          <img className="w-7 h-7 cursor-pointer" src={google1} alt="Google" />
        </div>

        <div className="text-black font-extralight text-center mt-6 text-lg">
          Don’t have an account?
          <a href="/signup" className="ml-1 font-medium">Create</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
