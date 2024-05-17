// LoginPage.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import fb1 from '../images/fb1.png'
import google1 from '../images/google1.png'
import { Button } from 'antd';
import login from '../images/login.png'

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Assuming validation passes
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    history.push('/dashboard');
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${login})` }}>
    <div className="w-full max-w-md p-8 mx-auto bg-gray-900 bg-opacity-10 backdrop-blur-lg backdrop-filter shadow-xl rounded-lg">
      <h1 className="text-black text-4xl font-bold capitalize text-left">TrailMaker</h1>
      <h1 className="text-black text-base font-light capitalize text-left mt-2">Start Your Adventure</h1>
  
      <div className="mt-6">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-12 bg-white rounded-lg shadow px-4 mb-4"
        />
      </div>
  
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-12 bg-white rounded-lg shadow px-4"
        />
      </div>
  
      <div className="flex items-center justify-between mt-2 mb-6">
        <label className="flex items-center text-black text-lg font-semibold">
          <input type="checkbox" className="mr-2 h-5 w-5" />
          Remember me
        </label>
        <h1 className="text-black text-lg font-semibold">Forgot password</h1>
      </div>

      <Link to="/hikes">
        <Button onClick={handleLogin} className="w-full h-14 bg-[#0A4649] text-white text-xl font-bold rounded-lg mb-6">
          <h1>Login</h1>
        </Button>
      </Link>
      

      <h1 className="text-white text-lg font-extralight mt-5 mb-2 text-center">Or continue with</h1>
      <div className="flex justify-center mb-6">
        <div className="w-28 h-px border border-white"></div>
      </div>
  
        <div className="flex items-center justify-center space-x-4">
          <img className="w-8 h-8" src={fb1} alt="Facebook" />
          <img className="w-7 h-7" src={google1} alt="Google" />
        </div>

      <div className="text-white font-extralight text-center mt-6 text-lg ">Don’t have an account ?
      <a href="/signup" className="ml-1 font-medium">Create</a>
    </div>


    </div>
  </section>
  
    
  );
};

export default Login;
