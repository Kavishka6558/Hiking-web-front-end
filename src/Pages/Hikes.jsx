import React, { useState, useEffect } from 'react';
import img4 from '../images/img4.png';
import { FaStar } from "react-icons/fa";
import { Button } from 'antd';
import GetstartModel from '../Modals/GetstartModel.jsx';
import HikeList from './HikeList.js';

const Hikes = () => {
 
  const [showModal, setShowModal] = useState(false);
  const [location, setLocation] = useState('');
  const [difficulty, setDifficulty] = useState([]);
  const [rating, setRating] = useState([]);
  const [filteredHikes, setFilteredHikes] = useState(HikeList);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleDifficultyChange = (e) => {
    const value = e.target.id;
    setDifficulty(prev => {
      if (prev.includes(value)) {
        return prev.filter(d => d !== value); 
      } else {
        return [...prev, value]; 
      }
    });
  };

  const handleRatingChange = (e) => {
    const value = e.target.id;
    setRating(prev => {
      if (prev.includes(value)) {
        return prev.filter(r => r !== value); 
      } else {
        return [...prev, value]; 
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = HikeList.filter(hike => {
      const matchesDifficulty = difficulty.length === 0 || difficulty.includes(hike.difficulty);
      const matchesRating = rating.length === 0 || rating.includes(hike.ratings);
      return matchesDifficulty && matchesRating;
    });
    setFilteredHikes(filtered); 
  };

  return (
    <section>
     
      <img className="w-full h-40 object-cover" src={img4} alt="Trail" />
      <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full flex flex-col items-center lg:flex-row lg:items-start mt-10 space-y-8 lg:space-y-0 lg:space-x-8">
          
          {/* Search  section */}
          <div className="w-full lg:w-[600px] bg-slate-300 p-6 rounded-lg shadow-lg">
            <h1 className="text-black text-3xl font-bold text-center lg:text-left">Search trails</h1>
            <form onSubmit={handleSubmit} className="mt-9">
              <div className="mb-6">
                <label className="font-bold" htmlFor="location">Trail destination</label>
                <input
                  className="w-full h-12 bg-white rounded-xl shadow-xl px-3 py-2 mt-2"
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter your location"
                  required
                />
              </div>
              
              {/* Difficulty level  */}
              <div className="mb-6">
                <h1 className="text-black text-base font-bold">Difficulty level</h1>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="easy" onChange={handleDifficultyChange} />
                    <label htmlFor="easy">Easy trail</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="moderate" onChange={handleDifficultyChange} />
                    <label htmlFor="moderate">Moderate trail</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="challenging" onChange={handleDifficultyChange} />
                    <label htmlFor="challenging">Challenging trail</label>
                  </div>
                </div>
              </div>
              
              {/* Trail rating  */}
              <div className="mb-6">
                <h1 className="text-black text-base font-bold">Trail rating</h1>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="any-star" onChange={handleRatingChange} />
                    <label htmlFor="any-star">Any star</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="5.0" onChange={handleRatingChange} />
                    <label htmlFor="5.0">5 star</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="4.0" onChange={handleRatingChange} />
                    <label htmlFor="4.0">4 star</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="3.0" onChange={handleRatingChange} />
                    <label htmlFor="3.0">3 star</label>
                  </div>
                  <div className="flex items-center">
                    <input className="mr-2 w-5 h-5" type="checkbox" id="2.0" onChange={handleRatingChange} />
                    <label htmlFor="2.0">2 star</label>
                  </div>
                </div>
              </div>
              
             
              <Button type="submit" className="w-full h-12 bg-teal-900 rounded-xl text-white font-bold mt-8">
                Find trails
              </Button>
            </form>
          </div>
          
          {/* Hikes display section */}
          <div className="w-full lg:w-auto">
            <Button className="bg-teal-900 rounded-xl w-full lg:w-[1380px] h-14 text-white font-bold">
              <a href='./create'>Create new path</a>
            </Button>
            <div className="mt-10 text-center lg:text-left">
              <h1 className="text-black text-base font-medium">Plan your next adventure</h1>
              <h1 className="text-black text-5xl font-bold">Find a hike</h1>
            </div>
            {filteredHikes.map((hike, index) => (
              <div key={index} className="w-full lg:w-[1380px] h-auto lg:h-60 bg-white mt-10 rounded-2xl shadow-xl p-4 lg:p-8 flex flex-col lg:flex-row">
                <img src={hike.img} className="w-full lg:w-1/3 h-auto object-cover rounded-lg" alt={hike.title} />
                <div className="mt-4 lg:mt-0 lg:ml-8 flex-1">
                  <h1 className="text-black text-xl font-bold">{hike.title}</h1>
                  <p className="text-justify text-black text-base font-extralight mt-2">{hike.description}</p>
                  <div className="flex items-center lg:ml-[650px] space-x-2">
                    <div className="mt-2 lg:mt-6 w-auto bg-black rounded-xl text-white font-bold px-2 py-2 h-10 flex">
                      {hike.ratings}
                      <FaStar className='ml-2 mt-1 text-yellow-400' />
                    </div>
                    <Button className="mt-4 lg:mt-6 w-full lg:w-auto bg-teal-900 rounded-xl text-white font-bold px-4 py-2 lg:ml-4 h-10" onClick={handleButtonClick}>
                      Get started
                    </Button>
                    <GetstartModel showModal={showModal} setShowModal={setShowModal} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section>
        <div className="w-full h-10 bg-teal-900 flex justify-between items-center px-4 lg:mt-10">
          <h1 className="text-white text-xl">TrailMaker.LK</h1>
          <h1 className="text-white text-sm">info@trailmaker.com</h1>
        </div>
      </section>
    </section>
  );
}

export default Hikes;
