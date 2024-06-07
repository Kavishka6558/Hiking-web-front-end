import React, { useState } from 'react';
import map2 from '../images/map2.png';
import { Button } from 'antd';
import { FaStar } from "react-icons/fa";

const Save = () => {
  const [imageUrl, setImageUrl] = useState('');

  const [rating, setRating] = useState(0); // State to store the rating

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <section className='flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12'>
      <div className='relative flex flex-col sm:flex-row items-center sm:items-start bg-gray-100 p-8 rounded-xl shadow-lg'>
        <img className="w-full sm:w-[650px] h-auto sm:h-[650px] rounded-xl mb-8 sm:mb-0 sm:mr-12" src={map2} alt="Map" />
  
        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left">
          <h1 className="text-black text-base font-normal mb-2">Share your trail with us</h1>
          <h1 className="text-black font-semibold text-2xl sm:text-4xl mb-8">Save your trail</h1>
  
          {/* Add img section */}
          <div className='w-full'>
            <h1 className="text-black text-sm font-semibold mb-2">Add Images</h1>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className='w-full sm:w-[600px] h-10 bg-white rounded-xl shadow-xl px-3 mb-8'
            />
            {imageUrl && (
              <div className="mb-8">
                <img src={imageUrl} alt="Uploaded" className="max-w-full max-h-[300px]"/>
              </div>
            )}
          </div>

          {/* Difficulty level */}
          <div className='w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left'>
            <h1 className='text-black text-sm font-semibold mb-2'>Enter difficulty level</h1>
            <div className="flex items-center">
              <input className="mr-2 w-5 h-5" type="checkbox" />
              <label htmlFor="easy" className="mr-4">Easy trail</label>
              <input className="mr-2 w-5 h-5" type="checkbox" />
              <label htmlFor="easy" className="mr-4">Moderate trail</label>
              <input className="mr-2 w-5 h-5" type="checkbox" />
              <label htmlFor="easy" className="mr-4">Challenging trail</label>
            </div>
          </div>

          {/* Rate trail */}
          <div className='w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left lg:mt-8'>
            <h1 className='text-black text-sm font-semibold mb-2'>Rate your trail</h1>
            {/* Custom star rating component */}
            <div className='flex space-x-1'>
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < rating ? "text-yellow-500 text-2xl cursor-pointer" : "text-gray-400 text-2xl cursor-pointer hover:text-yellow-500"}
                  onClick={() => handleRatingChange(index + 1)}
                />
              ))}
            </div>
          </div>

          {/* Description section */}
          <h1 className="text-black text-sm font-semibold mb-2 lg:mt-6">Description</h1>
          <textarea className='w-full sm:w-[600px] h-40 sm:h-[155px] bg-white rounded-xl shadow-xl p-3 mb-8'></textarea>
  
          <div className='flex space-x-4 justify-center sm:justify-end'>
            <Button className='w-80 h-14 bg-teal-900 rounded-xl flex items-center justify-center text-white lg:w-[600px]'>
              <a className=' text-xs font-black' href='./account'>Save</a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Save;
