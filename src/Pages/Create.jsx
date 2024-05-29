import React, { useState } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import users from './Users';
import img9 from '../images/img9.png';
import { TiTick } from "react-icons/ti";

const Create = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [buttonText, setButtonText] = useState('Add to hike');

    const handleClick = () => {
    setButtonText(<TiTick />);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl space-y-12 lg:space-y-0">
        <div className="w-full lg:w-[500px] h-auto mb-8 lg:mb-0 relative">
          <img
            className="w-full h-auto rounded-tl-xl rounded-bl-xl lg:rounded-bl-xl lg:rounded-tl-xl lg:h-[745px] lg:rounded-tr-none"
            src={img9}
            alt="img9"
          />

          {/* Create path form section*/}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 rounded-xl lg:rounded-tr-none">
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start bg-slate-300 rounded-lg p-8 space-y-3">
              <h1 className="text-black text-3xl font-semibold">Create your path</h1>
              <h1 className="text-black text-sm font-semibold capitalize">Trail Destination</h1>
              <form className="w-full">
                <div className="w-full mb-4">
                  <input
                    placeholder="Select Location"
                    type="text"
                    name="trailDestination"
                    className="w-full bg-white rounded-lg shadow px-3 py-2"
                  />
                </div>
                <h1 className="text-black text-sm font-semibold capitalize">Start Date</h1>
                <div className="w-full mb-4">
                  <input
                    type="date"
                    name="startDate"
                    className="w-full bg-white rounded-lg shadow px-3 py-2"
                  />
                </div>
                <h1 className="text-black text-sm font-semibold capitalize">Trail Type</h1>
                <div className="w-full mb-4">
                  <select
                    name="trailType"
                    className="w-full bg-white rounded-lg shadow px-3 py-2"
                  >
                    <option value="">Select Trail Type</option>
                    <option value="hiking">Hiking</option>
                    <option value="biking">Biking</option>
                    <option value="running">Running</option>
                  </select>
                </div>
                <Link to="/path">
                  <Button className="w-full lg:w-42 h-14 bg-teal-900 rounded-lg text-white font-bold mt-5">
                    Create My Path
                  </Button>
                </Link>
              </form>
            </div>
          </div>
        </div>

        {/* friends search section*/}
        <div className="w-full lg:w-[700px] bg-white rounded-tr-xl rounded-br-xl shadow-xl p-8">
          <h1 className="text-black text-4xl font-semibold mb-4">Create Your Own Hiking Path</h1>
          <p className="text-black text-base font-bold mb-10">Give relevant information and create your own hiking path</p>
          <h2 className="text-black text-xl font-medium mb-4">Search friends</h2>
          <div className="mb-8">
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={handleChange}
              className="w-full p-2 mb-6 border border-gray-300 rounded"
            />
          </div>
          <div className="space-y-6">
            {filteredUsers.map((user, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <img className="w-12 h-12 rounded-full mr-4" src={user.src} alt={user.name} />
                  <span className="text-black text-sm font-medium">{user.name}</span>
                </div>
                <button 
                  className="w-24 h-9 bg-teal-900 rounded-xl text-white text-xs font-bold"
                  onClick={handleClick}
                >{buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Create;
