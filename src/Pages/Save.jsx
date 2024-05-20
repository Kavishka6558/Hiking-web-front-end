import React, { useState } from 'react';
import map2 from '../images/map2.png'
import { Button } from 'antd'
import { Link } from 'react-router-dom';

const Save = () => {
  const [imageUrl, setImageUrl] = useState('');

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

  return (
    <section className='flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 py-12'>
    <div className='relative flex flex-col sm:flex-row items-center sm:items-start bg-gray-100 p-8 rounded-xl shadow-lg'>
      <img className="w-full sm:w-[600px] h-auto sm:h-[600px] rounded-xl mb-8 sm:mb-0 sm:mr-12" src={map2} alt="Map" />
  
      <div className="w-full sm:w-auto flex flex-col items-center sm:items-start text-center sm:text-left">
        <h1 className="text-black text-base font-normal mb-2">Share your trail with us</h1>
        <h1 className="text-black font-semibold text-2xl sm:text-4xl mb-8">Save your trail</h1>
  
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
  
          <h1 className="text-black text-sm font-semibold mb-2">Description</h1>
          <textarea className='w-full sm:w-[600px] h-40 sm:h-[310px] bg-white rounded-xl shadow-xl p-3 mb-8'></textarea>
  
          <div className='flex space-x-4 justify-center sm:justify-start'>
            <Link to="/account">
            <Button className='w-40 h-14 bg-teal-900 rounded-xl flex items-center justify-center text-white'>
              <h1 className=' text-xs font-black'>Save</h1>
            </Button>
            </Link>
            <Button className='w-40 h-14 bg-white rounded-xl shadow-xl flex items-center justify-center text-black'>
              <h1 className='text-xs font-black'>Share</h1>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
}

export default Save;
