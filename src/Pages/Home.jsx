import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'antd'
import { Card } from 'antd'
import hero from '../images/hero.png'
import Rectangle from '../images/Rectangle.png'
import { motion } from 'framer-motion'
import img1 from '../images/img1.png'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import F1 from '../images/F1.png'
import F2 from '../images/F2.png'
import F3 from '../images/F3.png'
import { FiArrowDownRight } from "react-icons/fi";
import user1 from '../images/user1.png'
import user2 from '../images/user2.png'
import user3 from '../images/user3.png'
import user4 from '../images/user4.png'
import img10 from '../images/img10.png'

import img11 from '../images/img11.png'
import img12 from '../images/img12.png'
import google from '../images/google.png'
import apple from '../images/apple.png'
import star from '../images/star.png'

const Home = () => {

  return (
    <section>
        <section>
            <div className="left-[131px] top-[236px] absolute text-teal-950 text-8xl font-bold leading-20 z-[-1]">
            <motion.h1 
            initial={{y: "2rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 2,
                          type: "tween"}}
            >
            Explore<br/>
            The perfect <br/>Trails <br/> In Srilanka
            </motion.h1>
              <h1 className='w-96 left-[131px]absolute text-teal-950 text-xl font-extralight mt-5'>
              Easily find your perfect hiking trail and leave the search struggles behind</h1>
            </div>
                <Link to="/trails">
                <Button className='bg-teal-900 left-[130px] top-[710px] absolute w-44 h-14 rounded-xl z-[-1]' id='FindHike'>
                <h1 className='left-[20px] top-[10px] absolute text-black text-xl font-medium'>Explore more</h1>
                </Button>
                </Link>
               

            <img className="w-1500 h-1080 left-[890px] top-[0px] absolute origin-top-left z-[-1]" src={Rectangle} />
    
            <motion.div 
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
            duration: 2,
            type: "tween"
            }}
            className='w-[1500px] h-1080 left-[400px] top-[60px]  absolute origin-top-left z-[-1]'>
            <img src={hero} alt=''/>
            </motion.div>
        </section>

        <section >
            {/* ------------------------blog section-------------------------------------------------- */}
            <div className="w-96 h-96 absolute top-[1100px] left-[131px] z-[-1]">
                <div>
                    <h1 className="left-[1px] top-[108px] absolute text-black text-5xl font-bold font-['Inter']">Best trail <br/>to hike </h1>
                    <h1 className="w-64 left-0 top-[236px] absolute text-black text-base font-light font-['Inter']">These are our top rated and most visited destination</h1>
                    <h1 className="left-0 top-[292px] absolute text-black text-base font-bold font-['Inter'] underline">View all mountains <FiArrowDownRight  className='ml-[150px] -mt-4'/></h1>
                </div>
                <div className=''>
                    <img className="w-96 h-96 left-[374px] top-0 absolute rounded-xl hover:scale-105 transition duration-300 ease-in-out" src={img1} />
                    <Card className='w-80 h-36 left-[405px] top-[311px] absolute bg-white rounded-xl shadow-xl'>
                    <h1 className="left-[20px] top-[20px] absolute text-black text-xl font-bold">Ella rock</h1>
                    <h1 className="w-72 left-[20px] top-[50px] absolute text-justify text-black text-base font-light font-['Inter'] capitalize">Located near the town of Ella</h1>
                    </Card>

                    <img className="w-96 h-96 left-[821px] top-0 absolute rounded-xl hover:scale-105 transition duration-300 ease-in-out" src={img2} />
                    <Card className="w-80 h-36 left-[852px] top-[311px] absolute bg-white rounded-xl shadow-xl">
                    <h1 className="left-[20px] top-[20px] absolute text-black text-xl font-bold ">Adam's Peak (Sri Pada)</h1>
                    <div className="w-64 left-[20px] top-[50px] absolute text-justify text-black text-base font-light font-['Inter'] capitalize">Adam's Peak is a 2,243 m 
                        tall conical sacred mountain located in central Sri Lanka</div>
                    </Card>

                    <img className="w-96 h-96 left-[1268px] top-0 absolute rounded-xl hover:scale-105 transition duration-300 ease-in-out" src={img3} />
                    <Card className='w-80 h-36 left-[1300px] top-[311px] absolute bg-white rounded-xl shadow-xl'>
                    <div className="left-[20px] top-[20px] absolute text-black text-xl font-bold">Pidurutalagala</div>
                    <div className="left-[20px] top-[50px] absolute text-black text-base font-light font-['Inter']">Highest mountain in Sri Lanka</div>
                    </Card>
                </div>
            </div>
        </section>

         {/* ------------------------features section-------------------------------------------------- */}
        <section>
        <div className="  justify-center items-center inline-flex">
            <div className=" absolute  top-[1680px] left-[131px] z-[-1]">
                <Card  className="w-[500px] h-[600px] left-[150px]  bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                    <img className=" absolute rounded-xl w-[450px]" src={F1} /> 
                    <h1 className='w-64 mt-[370px] text-center text-black text-xl font-bold'>Inter Connect Each Hikers</h1>
                    <h1 className=' mt-[20px] font-extralight text-black text-xl text-left'>Every hiker can connect through the application and it will be useful in their emergency situations</h1>
                </Card>
                <Card  className="w-[400px] h-[600px] left-[660px] top-[-600px] bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                    <img className=" absolute rounded-xl w-[350px]" src={F2} /> 
                    <h1 className='w-64 mt-[290px]  text-black text-xl font-bold text-center ml-10'>Tracking Your Path</h1>
                    <h1 className='w-64 mt-[20px] font-extralight text-black text-xl text-center ml-10'>
                        Web application tracks all hikers paths, and it helps hikers in emergency cases and finds a way back home.</h1>
                </Card>
                <Card  className="w-[400px] h-[600px] left-[1070px] top-[-1200px] bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                    <img className=" absolute rounded-xl w-[350px]" src={F3} /> 
                    <h1 className='w-64 mt-[290px]  text-black text-xl font-bold text-center ml-10'>Send SOS Message In Your Emergency</h1>
                    <h1 className='w-64 mt-[20px] font-extralight text-black text-xl text-center ml-10'>
                        Hikers can send sos message  in nearby police station when there emergency using application</h1>
                </Card>
                <Card  className="w-[500px] h-[220px] left-[150px] top-[-1190px] bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                    <h1 className='w-64 text-center text-black text-xl font-bold'>Inter Connect Each Hikers</h1>
                    <h1 className=' mt-[20px] font-extralight text-black text-xl text-left'>Every hiker can connect through the application and it will be useful in their emergency situations</h1>
                </Card>
                <Card  className="w-[810px] h-[220px] left-[660px] top-[-1410px] bg-white rounded-2xl shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                    <h1 className='w-64 text-center text-black text-xl font-bold'>Inter Connect Each Hikers</h1>
                    <h1 className='mt-[20px] font-extralight text-black text-xl text-left'>All registered hikers can chat through the application with each other when they hike.</h1>
                </Card>
            </div>
        </div>
        </section>

            {/* -----------------------------steps section------------------------------------------------------------- */}
        <section>
        <div >
            <div className="w-96 h-96 left-[620px] top-[2700px] absolute z-[-1]">
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
            <h1 className='top-[13px] absolute text-white font-semibold ml-4'>Get Started</h1>
          </Button>
        </div>
            <img className="h-[500px] left-[1400px] top-[2700px] absolute origin-top-left z-[-1]" src={img10} />
        </div>
        </section>

          {/* ------------------------download section-------------------------------------------------- */}
        <section>
            <div className=" h-96 top-[3600px] absolute">
                <h1 className="h-20 ml-[500px] text-cyan-950 text-5xl font-black">Get the Trailmaker App</h1>
                <h1 className="ml-[500px] -mt-[18px] text-black font-medium">Connect with your ultimate hiking partner</h1>
                <img className="w-96 h-96 left-0 top-0 absolute" src={img11} />
                <img className="w-96 h-96 left-[1288px] top-[17px] absolute" src={img12} />
                <img className="w-40 h-14 left-[500px] top-[103px] absolute" src={google} />
                <img className="w-40 h-14 left-[676px] top-[103px] absolute" src={apple} />
            </div>
        </section>

        <section>
            <div className="w-96 h-96 absolute top-[4100px] left-[131px]">
                <div>
                    <h1 className="left-[1px] top-[37px] absolute text-black text-5xl font-bold font-['Inter']">Hiker<br/>reviews</h1>
                    <h1 className="left-0 top-[146px] absolute text-black text-base font-light font-['Inter']">Here’s What some of our<br/>hikers have to say</h1>
                    <h1 className="left-[1px] top-[211px] absolute text-black text-base font-bold font-['Inter'] underline">Read all reviews <FiArrowDownRight  className='ml-[130px] -mt-4'/></h1>  
                </div>
                
                <div>
                    <Card className="w-80 h-80 left-[275px] top-0 absolute bg-white rounded-xl shadow-xl">
                    <img className="w-24 h-24 left-[103px] top-[30px] absolute" src={user4}/>
                    <img className="w-24 h-8 left-[103px] top-[152px] absolute" src={star}/>
                    <div className="w-52 left-[50px] top-[200px] absolute text-center text-black text-xs font-normal">“Simple and effective! I love how easy it is to track my hikes with this app. No complicated features, just straightforward tracking. 
                    Perfect for anyone who wants to focus on the trail, not the tech.”</div> 
                 
                    </Card>

                    <Card className="w-80 h-80 left-[642px] top-[-3px] absolute bg-white rounded-xl shadow-xl">
                    <img className="w-24 h-24 left-[103px] top-[30px] absolute" src={user3}/>
                    <img className="w-24 h-8 left-[103px] top-[152px] absolute" src={star}/>
                    <h1 className="w-56 left-[50px] top-[200px] absolute text-center text-black text-xs font-normal ">"Great for beginners! As someone new to hiking, this app has been a lifesaver. It helps me keep track of my progress 
                    and motivates me to explore new trails. Plus, the interface is super user-friendly.”</h1>
                    </Card>

                    <Card className="w-80 h-80 left-[1011px] top-0 absolute bg-white rounded-xl shadow-xl">
                    <img className="w-24 h-24 left-[103px] top-[30px] absolute" src={user2}/>
                    <img className="w-24 h-8 left-[103px] top-[152px] absolute" src={star}/>
                    <h1 className="w-52 left-[55px] top-[200px] absolute text-center text-black text-xs font-normal ">“ Handy tool for nature lovers! I'm always out in the wilderness, and this app has become my go-to companion. 
                    It reliably records my hikes, and I can easily share my routes with friends.”</h1>
                    </Card>

                    <Card className="w-80 h-80 left-[1380px] top-0 absolute bg-white rounded-xl shadow-xl">
                    <img className="w-24 h-24 left-[103px] top-[30px] absolute" src={user1}/>
                    <img className="w-24 h-8 left-[103px] top-[152px] absolute" src={star}/>
                    <h1 className="w-60 left-[45px] top-[200px] absolute text-center text-black text-xs font-normal font-['Inter'] leading-none">“Could use more features. While this app gets the job done, 
                    I wish it had more advanced tracking options.It's a bit basic for my taste, but it's still useful for keeping tabs on my hikes.”</h1>
                    </Card>
                    </div>
                <div/>
            </div>
        </section>

        <section>  
                {/* --------------------------------footer------------------------------------------------------------ */}
        <div className='mt-[4500px]'>
            <div className="w-full h-70 bg-teal-950 absolute">
                <h1 className='text-white text-2xl font-black ml-10 mt-3'>TrailMaker</h1>
                <h1 className='text-white text-base font-extralight ml-10 mt-2'>Your Ultimate Hiking Companion</h1>
                <h1 className='text-white text-base font-extralight ml-10 mt-2'>About<br/>Features<br/>Guide<br/>Hikes<br/> <br/></h1>
            </div>
            <div className="w-full h-10 bg-teal-900 absolute mt-48">
                <h1 className='text-white text-xl font-normal ml-6'>TrailMaker.LK</h1>
                <h1 className='text-white text-sm font-normal ml-[1700px] -mt-[14px]'>info@trailmaker.com</h1>
            </div>
        </div>  
        </section>
    </section>

  )
}

export default Home