import React from 'react'
import hero from '../images/hero.mp4'
import { Button } from "antd";
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Trails = () => {
  return (
    <section className="relative">
  <div className="flex w-full flex-col gradient min-h-screen overflow-auto justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
    <video
      src={hero}
      autoPlay
      loop
      className="brightness-40 w-full h-full absolute top-0 left-0 object-cover"
    />
    <div className="relative flex flex-col items-center text-center">
      <h1 className='text-white text-4xl sm:text-6xl font-bold capitalize'>
        YOUR HIKING ADVENTURE<br />STARTS HERE
      </h1>
      <p className='text-white text-xl sm:text-3xl font-medium mt-3'>
        Everything you need to get out on the trail
      </p>
      <Link to="/signup">
        <Button className='w-64 sm:w-96 h-16 sm:h-20 bg-[#0A4649] rounded-full mt-8 sm:mt-12 flex items-center justify-center text-white'>
        <h1 className=' text-3xl sm:text-3xl font-bold flex'>FIND A HIKE <FaArrowAltCircleRight className='ml-3 mt-1' /> </h1>
        </Button>
      </Link>
    </div>
  </div>
</section>

  )
}

export default Trails