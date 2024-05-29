import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card } from 'antd'
import { FiArrowDownRight } from "react-icons/fi";
import { motion } from 'framer-motion'
import hero from '../images/hero.png'
import Rectangle from '../images/Rectangle.png'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.png'
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'
import user4 from '../images/user4.png'
import img10 from '../images/img10.png'
import google from '../images/google.png'
import apple from '../images/apple.png'
import star from '../images/star.png'
import arrow from '../images/arrow.png'

const Home = () => {

  return (
    <section>
      <section className="relative flex flex-col items-start lg:flex-row lg:items-center min-h-screen bg-white mt-20 ">
      <div className="relative z-10 lg:z-0 lg:absolute lg:left-[131px] lg:top-[236px] text-teal-950 text-4xl lg:text-8xl font-bold leading-tight lg:leading-[5rem] mb-8 lg:mb-0 ml-10">
        <motion.h1 
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "tween" }}
        >
          Explore<br />
          The perfect <br />Trails <br /> In Srilanka
        </motion.h1>
        <h1 className='w-full lg:w-96 mt-5 text-xl font-extralight'>
          Easily find your perfect hiking trail and leave the search struggles behind
        </h1>
      </div>

      <Link to="/trails" className="mt-2 lg:mt-96 lg:ml-44 ml-10">
        <Button className='bg-teal-900 w-full lg:w-44 h-14 rounded-xl z-10'>
          <a className='text-xl font-medium'>Explore more</a>
        </Button>
      </Link>
      
      <img className="hidden lg:block lg:w-[1000px] lg:h-[950px] lg:absolute lg:left-[890px] lg:top-0 origin-top-left z-0" src={Rectangle} alt="Background" />
      <motion.div 
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: "tween" }}
        className='w-full lg:w-[1500px] lg:h-[1080px] lg:absolute lg:left-[400px] lg:top-[60px] origin-top-left z-0'
      >
        <img src={hero} alt='Hero' className="w-full h-auto" />
      </motion.div>
    </section>
    

      {/* ------------------------blog section-------------------------------------------------- */}
    <section className="relative flex flex-col items-center pt-8 lg:pt-0 -mt-20">
      <div className="w-full  mx-auto relative mt-60">
        <div className="text-center lg:text-start mb-8 lg:ml-32">
          <h1 className="text-black text-3xl lg:text-5xl font-bold font-['Inter']">Best trail <br />to hike</h1>
          <h1 className="mt-4 lg:mt-2 text-black text-base font-light font-['Inter']">These are our top rated and <br/>most visited destinations</h1>
          <h1 className="mt-4 text-blue-500 text-base font-bold font-['Inter'] underline inline-flex items-center">
            View all mountains <FiArrowDownRight className='ml-2' />
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-20 lg:gap-16 lg:ml-[400px] -mt-64">
          <div className="relative group">
            <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105" src={img1} alt="Ella rock" />
            <Card className="absolute inset-x-0 bottom-0 mx-auto w-72 lg:w-80 h-36 bg-white rounded-xl shadow-xl transform translate-y-8 lg:translate-y-12">
              <h1 className="text-black text-xl font-bold p-4">Ella rock</h1>
              <h1 className="text-black text-base font-light font-['Inter'] capitalize px-2">Located near the town of Ella</h1>
            </Card>
          </div>

          <div className="relative group">
            <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105" src={img2} alt="Adam's Peak" />
            <Card className="absolute inset-x-0 bottom-0 mx-auto w-72 lg:w-80 h-36 bg-white rounded-xl shadow-xl transform translate-y-8 lg:translate-y-12">
              <h1 className="text-black text-xl font-bold p-0">Adam's Peak (Sri Pada)</h1>
              <div className="text-black text-base font-light font-['Inter'] capitalize px-2">
                Adam's Peak is a 2,243 m tall conical sacred mountain located in central Sri Lanka
              </div>
            </Card>
          </div>

          <div className="relative group">
            <img className="w-72 h-72 lg:w-96 lg:h-96 rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105" src={img3} alt="Pidurutalagala" />
            <Card className="absolute inset-x-0 bottom-0 mx-auto w-72 lg:w-80 h-36 bg-white rounded-xl shadow-xl transform translate-y-8 lg:translate-y-12">
              <h1 className="text-black text-xl font-bold p-4">Pidurutalagala</h1>
              <div className="text-black text-base font-light font-['Inter'] px-4">Highest mountain in Sri Lanka</div>
            </Card>
          </div>
        </div>
      </div>
    </section>

         {/* ------------------------features section-------------------------------------------------- */}
         <section className="relative lg:py-[0px] px-5 md:px-20 py-[100px] lg:mt-[150px] -lg:mt-96">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <Card className="relative w-full md:w-[500px] h-auto bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out p-5">
          <img className="w-full rounded-xl" src={F1} alt="Feature 1" />
          <h1 className="mt-5 text-center text-black text-xl font-bold">
            Inter Connect Each Hikers
          </h1>
          <h1 className="mt-3 font-extralight text-black text-xl text-left">
            Every hiker can connect through the application and it will be useful in their emergency situations
          </h1>
        </Card>

        <Card className="relative w-full md:w-[400px] h-auto bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out p-5">
          <img className="w-full rounded-xl" src={F2} alt="Feature 2" />
          <h1 className="mt-5 text-center text-black text-xl font-bold">
            Tracking Your Path
          </h1>
          <h1 className="mt-3 font-extralight text-black text-xl text-center">
            Web application tracks all hikers' paths, and it helps hikers in emergency cases and finds a way back home.
          </h1>
        </Card>

        <Card className="relative w-full md:w-[400px] h-auto bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out p-5">
          <img className="w-full rounded-xl" src={F3} alt="Feature 3" />
          <h1 className="mt-5 text-center text-black text-xl font-bold">
            Send SOS Message In Your Emergency
          </h1>
          <h1 className="mt-3 font-extralight text-black text-xl text-center">
            Hikers can send SOS messages to nearby police stations during emergencies using the application.
          </h1>
        </Card>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
        <Card className="relative w-full md:w-[500px] h-52 bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out p-5">
          <h1 className="text-center text-black text-xl font-bold">
            Inter Connect Each Hikers
          </h1>
          <h1 className="mt-3 font-extralight text-black text-xl text-left">
            Every hiker can connect through the application and it will be useful in their emergency situations.
          </h1>
        </Card>

        <Card className="relative w-full md:w-[810px] h-52 bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out p-5">
          <h1 className="text-center text-black text-xl font-bold">
            Inter Connect Each Hikers
          </h1>
          <h1 className="mt-3 font-extralight text-black text-xl text-left">
            All registered hikers can chat through the application with each other when they hike.
          </h1>
        </Card>
      </div>
    </section>

            {/* -----------------------------steps section------------------------------------------------------------- */}
        <section className='hidden md:block'>
        <div >
            <div className="w-96 h-96 left-[620px] top-[2650px] absolute z-[-1]">
              <img className='h-[1000px] w-96 ml-32 -mt-32' src={arrow}/>
              <Card className="w-80 h-24 left-0 top-0 absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 left-[15px] top-[18px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>1</h1></div>
              <h1 className="left-[90px] top-[11px] absolute text-black text-2xl font-bold">Find a hike</h1>
              <h1 className="w-52 left-[89px] top-[45px] absolute text-black text-base font-light">Choose the hike as per you convenience</h1>
              </Card>

              <Card className="w-80 h-24 left-[365px] top-[125px] absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 left-[11px] top-[15px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>2</h1></div>
              <h1 className="w-40 left-[90px] top-[15px] absolute text-black text-2xl font-bold ">Select a trail destination</h1>
              </Card>

              <Card className="w-80 h-24 left-0 top-[249px] absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 left-[15px] top-[20px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>3</h1></div>
              <h1 className="w-48 left-[94px] top-[20px] absolute text-black text-2xl font-bold">Select your start date</h1>
              </Card>

              <Card className="w-80 h-24 left-[365px] top-[375px] absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 left-[20px] top-[15px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>4</h1></div>
              <h1 className="ml-[70px] top-[409px] text-black text-2xl font-bold">Select trail type</h1>
              </Card>

              <Card className="w-80 h-24 left-0 top-[499px] absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <div className="w-16 h-16 left-[15px] top-[15px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>5</h1></div>
              <h1 className="left-[90px] top-[30px] absolute text-black text-2xl font-bold ">Select Your Role</h1>
              </Card>

              <Card className="w-80 h-24 left-[365px] top-[625px] absolute bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
              <h1 className="ml-[60px] mt-[9px] text-black text-2xl font-bold">Create Your Path</h1>
              <div className="w-16 h-16 left-[10px] top-[15px] absolute bg-teal-950 rounded-full"><h1 className='text-white text-5xl font-bold py-1 px-4'>6</h1></div>
              </Card>
        </div>

        <div className="w-80 h-60 left-[131px] top-[2903px] absolute z-[-1]">
          <div className="left-0 top-0 absolute text-black text-5xl font-bold">Creating path <br/>is simple</div>
          <div className="w-72 left-0 top-[120px] absolute text-black text-base font-light">Follow six simple steps below to create your own hiking path</div>
          <Button className="w-36 h-12 left-0 top-[186px] absolute bg-teal-800 rounded-xl" >
            <h1 className='top-[13px] absolute text-white font-semibold ml-4'><a href='./trails'>Get Started</a></h1>
          </Button>
        </div>
            <img className="h-[500px] left-[1400px] top-[2700px] absolute origin-top-left z-[-1]" src={img10} />
        </div>
        </section>

          {/* ------------------------download section-------------------------------------------------- */}
          <section className="relative w-full h-96 bg-teal-900 py-10 px-5 lg:mt-[970px] ">
          <div className="flex flex-col items-center justify-center lg:mt-14 ">
        <h1 className="text-white text-3xl lg:text-5xl font-black md:text-center">Get the TrailMaker App</h1>
        <h1 className="text-white font-medium mt-2 md:mt-4">Connect with your ultimate hiking partner</h1>
        <div className="flex space-x-4 mt-6 md:mt-8">
            <img className="w-32 h-12 md:w-40 md:h-14" src={google} alt="Google Play Store" />
            <img className="w-32 h-12 md:w-40 md:h-14" src={apple} alt="Apple App Store" />
        </div>
    </div>
</section>

  {/* ------------------------review section-------------------------------------------------- */}
<section className="relative w-full py-10 px-5 bg-gray-50 flex flex-col md:items-center lg:items-start">
    <div className="max-w-screen-lg mx-auto lg:ml-32 lg:mt-14 absolute">
        <div className="flex flex-col md:flex-row md:space-x-10">
            <div className="flex flex-col">
                <h1 className="text-black text-3xl md:text-5xl font-bold font-['Inter'] mt-8 md:mt-0 lg:mt-14">Hiker Reviews</h1>
                <h1 className="text-black text-base font-light mt-4 md:mt-2">Here’s what some of our hikers have to say</h1>
                <h1 className="text-blue-500 text-base font-bold underline mt-2 md:mt-4 inline-flex items-center">
                    Read all reviews 
                    <FiArrowDownRight className="ml-2 -mt-1"/>
                </h1>  
            </div>
            
            <div className="flex flex-col md:flex-row md:gap-10 gap-4 mt-8 md:mt-12 lg:mt-1">
                <Card className="w-full md:w-80 h-80 bg-white rounded-xl shadow-xl mx-auto">
                    <img className="w-24 h-24 mx-auto mt-4" src={user4} alt="User 1" />
                    <img className="w-24 h-8 mx-auto mt-4" src={star} alt="Rating Star" />
                    <div className="text-center text-black text-lg font-normal mt-4">App praised for simplicity, letting hikers focus on the trail.</div> 
                </Card>

                <Card className="w-full md:w-80 h-80 bg-white rounded-xl shadow-xl mx-auto">
                    <img className="w-24 h-24 mx-auto mt-4" src={user3} alt="User 2" />
                    <img className="w-24 h-8 mx-auto mt-4" src={star} alt="Rating Star" />
                    <div className="text-center text-black text-lg font-normal mt-4">Easy app for newbies. Tracks hikes & finds new trails.</div>
                </Card>

                <Card className="w-full md:w-80 h-80 bg-white rounded-xl shadow-xl mx-auto">
                    <img className="w-24 h-24 mx-auto mt-4" src={user2} alt="User 3" />
                    <img className="w-24 h-8 mx-auto mt-4" src={star} alt="Rating Star" />
                    <div className="text-center text-black text-lg font-normal mt-4">Nature lover's app: Tracks hikes & lets you share adventures with friends.</div>
                </Card>

                <Card className="w-full md:w-80 h-80 bg-white rounded-xl shadow-xl mx-auto">
                    <img className="w-24 h-24 mx-auto mt-4" src={user1} alt="User 4" />
                    <img className="w-24 h-8 mx-auto mt-4" src={star} alt="Rating Star" />
                    <div className="text-center text-black text-lg font-normal mt-4">Lacks advanced tracking (basic), but still useful for recording hikes.</div>
                </Card>
              </div>
          </div>
      </div>
  </section>

  {/* ------------------------footer-------------------------------------------------- */}
    <section>
        <div className="w-full h-10 bg-teal-900 flex justify-between items-center px-4 lg:mt-[500px] mt-[1500px]">
          <h1 className="text-white text-xl">TrailMaker.LK</h1>
          <h1 className="text-white text-sm">info@trailmaker.com</h1>
        </div>
      </section>

  </section>
  )
}

export default Home