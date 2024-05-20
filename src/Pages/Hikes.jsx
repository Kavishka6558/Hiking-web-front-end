import React, { useState, useEffect } from 'react'
import img4 from '../images/img4.png'
import img5 from '../images/img5.png'
import img6 from '../images/img6.png'
import img7 from '../images/img7.png'
import img8 from '../images/img8.png'
import { Button } from 'antd'


const Hikes = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');


  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Location submitted:", location);
  };

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (

    <section>
  <img className="w-full h-72 object-cover" src={img4} alt="Trail" />

  <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8">
    <div className="w-full flex flex-col items-center lg:flex-row lg:items-start mt-10 space-y-8 lg:space-y-0 lg:space-x-8">
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
              onChange={handleChange}
              placeholder="Enter your location"
              required
            />
          </div>
          <div className="mb-6">
            <h1 className="text-black text-base font-bold">Difficulty level</h1>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="easy" />
                <label htmlFor="easy">Easy trail</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="moderate" />
                <label htmlFor="moderate">Moderate trail</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="challenging" />
                <label htmlFor="challenging">Challenging trail</label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-black text-base font-bold">Trail level</h1>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="beginner" />
                <label htmlFor="beginner">Beginner</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="medium" />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="advanced" />
                <label htmlFor="advanced">Advanced</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="expert" />
                <label htmlFor="expert">Expert</label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <h1 className="text-black text-base font-bold">Trail rating</h1>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="any-star" />
                <label htmlFor="any-star">Any star</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="five-star" />
                <label htmlFor="five-star">5 star</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="four-star" />
                <label htmlFor="four-star">4 star</label>
              </div>
              <div className="flex items-center">
                <input className="mr-2 w-5 h-5" type="checkbox" id="three-star" />
                <label htmlFor="three-star">3 star</label>
              </div>
            </div>
          </div>
          <Button  className="w-full h-12 bg-teal-900 rounded-xl text-white font-bold mt-8">
              <button>Find trails</button>
          </Button>
         
        </form>
      </div>
      <div className="w-full lg:w-auto">
        <Button className="bg-teal-900 rounded-xl w-full lg:w-[1380px] h-14 text-white font-bold">
          <a href='./create'>Create new path</a>
        </Button>
       
        <div className="mt-10 text-center lg:text-left">
          <h1 className="text-black text-base font-medium">Plan your next adventure</h1>
          <h1 className="text-black text-5xl font-bold">Find a hike</h1>
        </div>
        {[{
          img: img5,
          title: "Pidurutalagala",
          description: "While neighboring Sigiriya gets more attention, Pidurangala Rock offers a less crowded alternative with equally stunning views. The hike to the top involves some steep sections but rewards hikers with panoramic views of Sigiriya Rock and the surrounding landscape."
        }, {
          img: img6,
          title: "Adam's Peak (Sri Pada)",
          description: "This iconic pilgrimage site is famous for its 'Sacred Footprint' at the summit, believed by different religious groups to be the footprint of Buddha, Shiva, or Adam. The hike typically begins in the early hours of the morning to reach the summit in time for sunrise."
        }, {
          img: img7,
          title: "Knuckles Mountain Range",
          description: "Situated in central Sri Lanka, the Knuckles Range is a UNESCO World Heritage Site known for its biodiversity and scenic beauty. There are numerous trekking trails here ranging from easy walks to more challenging hikes that offer breathtaking views of valleys, waterfalls, and cloud forests."
        }, {
          img: img8,
          title: "Ella Rock",
          description: "Located near the town of Ella, this hike offers stunning views of the surrounding countryside, tea plantations, and waterfalls. The trail can be a bit challenging in parts but is well worth the effort for the panoramic vistas."
        }].map((hike, index) => (
          <div key={index} className="w-full lg:w-[1380px] h-auto lg:h-60 bg-white mt-10 rounded-2xl shadow-xl p-4 lg:p-8 flex flex-col lg:flex-row">
            <img src={hike.img} className="w-full lg:w-1/3 h-auto object-cover rounded-lg lg:rounded-none" alt={hike.title} />
            <div className="mt-4 lg:mt-0 lg:ml-8 flex-1">
              <h1 className="text-black text-xl font-bold">{hike.title}</h1>
              <p className="text-justify text-black text-base font-extralight mt-2">{hike.description}</p>
              <button className="mt-4 lg:mt-10 w-full lg:w-auto bg-teal-900 rounded-xl text-white font-bold px-4 py-2 lg:ml-[700px]">Get started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section>
    <div className='relative top-[20px] lg:ml-[1270px] text-black'>
      {username && <a href="/account" className='font-bold text-2xl'> {username}</a>}
    </div>
  </section>

  <section>
    <div className="w-full h-auto lg:h-70 mt-10 bg-teal-950 flex flex-col items-left py-8 px-5">
      <h1 className="text-white text-2xl font-black">TrailMaker</h1>
      <p className="text-white text-base font-extralight mt-2">Your Ultimate Hiking Companion</p>
      <div className="text-white text-base font-extralight mt-2 text-left">
        <p>About</p>
        <p>Features</p>
        <p>Guide</p>
        <p>Hikes</p>
      </div>
    </div>
    <div className="w-full h-10 bg-teal-900 flex justify-between items-center px-4">
      <h1 className="text-white text-xl">TrailMaker.LK</h1>
      <h1 className="text-white text-sm">info@trailmaker.com</h1>
    </div>
  </section>

 
</section>

  
  )
}

export default Hikes