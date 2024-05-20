import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img9 from '../images/img9.png';
import user1 from '../images/user1.png';
import user2 from '../images/user2.png';
import user3 from '../images/user3.png';
import user4 from '../images/user4.png';
import user5 from '../images/user5.png';
import user6 from '../images/user6.png';

const Create = () => {
  
  const [formData, setFormData] = useState({
    trailDestination: '',
    startDate: '',
    trailType: '',
    role: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save form data to local storage or perform any other actions
    console.log('Form data submitted:', formData);
  };

  return (
    <section className="flex flex-col lg:flex-row justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12 mt-24">
    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl space-y-12 lg:space-y-0">
      
      <div className="w-full lg:w-[500px] h-auto mb-8 lg:mb-0 relative">
        <img className="w-full h-auto rounded-tl-xl rounded-bl-xl lg:rounded-bl-none lg:rounded-tl-xl lg:h-[700px]" src={img9} alt="Map" />
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start bg-slate-300 rounded-lg p-8 space-y-3">
            <h1 className="text-black text-3xl font-semibold">Create your path</h1>
            <h1 className="text-black text-sm font-semibold capitalize">Trail Destination</h1>
            <form onSubmit={handleSubmit} className="w-full">
              <div className="w-full mb-4">
                <input
                  placeholder="Select Location"
                  type="text"
                  name="trailDestination"
                  value={formData.trailDestination}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg shadow px-3 py-2"
                />
              </div>
              <h1 className="text-black text-sm font-semibold capitalize">Start Date</h1>
              <div className="w-full mb-4">
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg shadow px-3 py-2"
                />
              </div>
              <h1 className="text-black text-sm font-semibold capitalize">Trail Type</h1>
              <div className="w-full mb-4">
                <select
                  name="trailType"
                  value={formData.trailType}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg shadow px-3 py-2"
                >
                  <option value="">Select Trail Type</option>
                  <option value="hiking">Hiking</option>
                  <option value="biking">Biking</option>
                  <option value="running">Running</option>
                </select>
              </div>
              <h1 className="text-black text-sm font-semibold">Your Role</h1>
              <div className="w-full mb-8">
                <input
                  placeholder="Hiker"
                  className="w-full bg-white rounded-lg shadow px-3 py-2"
                />
              </div>
              <Link to="/path">
              <Button className="w-full lg:w-42 h-14 bg-teal-900 rounded-lg text-white font-bold">
                <h1> Create My Path</h1>
              </Button>
              </Link>
             
            </form>
          </div>
        </div>
      </div>
  
      <div className="w-full lg:w-[700px] bg-white rounded-tr-xl rounded-br-xl shadow-xl p-8">
        <h1 className="text-black text-4xl font-semibold mb-4">Create Your Own Hiking Path</h1>
        <p className="text-black text-base font-bold mb-10">Give relevant information and create your own hiking path</p>
        <h2 className="text-black text-xl font-medium mb-4">Search friends</h2>
        <div className="mb-8">
          <input
            className="w-full bg-white rounded-xl shadow-xl px-3 py-2"
            placeholder="Find friends"
          />
        </div>
        <div className="space-y-6">
          {[
            { name: 'Alex Johnson', src: user1 },
            { name: 'Emily Brown', src: user2 },
            { name: 'Samantha Lee', src: user3 },
            { name: 'Lisa Anderson', src: user4 },
            { name: 'John Smith', src: user5 },
            { name: 'Kevin Martinez', src: user6 },
          ].map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={user.src} alt={user.name} />
                <span className="text-black text-sm font-medium">{user.name}</span>
              </div>
              <button className="w-24 h-9 bg-teal-900 rounded-xl text-white text-xs font-bold">Add to hike</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  

  
  

    
  );
}

export default Create;
