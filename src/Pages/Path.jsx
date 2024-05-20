import React from 'react';
import { Segment } from 'semantic-ui-react'; 
import ChatBot from 'react-simple-chatbot';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


const Path = () => {
  const steps = [
    {
      id: 'Greet',
      message: 'Hi,Good morning', 
      trigger: 'waiting',
    },
    {
      id: 'waiting',
      user: true, 
      trigger: 'Name',
    },
    {
      id: 'Name',
      message: 'Where are you on the trail?', 
      trigger: 'issues',
    },
    {
      id: 'issues',
      user: true, 
      trigger: 'React',
    },
    {
      id: 'React',
      message: 'Ok, then lets go',
      end: true
    },
  
  ];

  return (
    <section className="relative h-screen">
    <div className="absolute top-28 left-4 md:rigth-auto md:left-4 md:top-20 z-10">
      <Button className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
        <h1 className=" text-xs md:text-sm font-bold">SOS</h1>
      </Button>
    </div>
  
    <div className="absolute top-20 left-4 md:right-auto md:left-4 md:top-[150px] z-10">
      <input type="radio" className="w-5 h-5" />
      <h1 className="ml-7 -mt-8 text-black text-sm md:text-xl font-bold">Auto Save</h1>
    </div>
  
    <div className="absolute top-20 right-4 md:left-auto md:right-4 md:top-[100px] z-10">
      <Button className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
        <h1 className=" text-xs md:text-sm font-bold">Start tracking</h1>
      </Button>
    </div>
  
    <div className="absolute top-32 right-4 md:left-auto md:right-4 md:top-[150px] z-10">
      <Link to="/save">
        <Button className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
          <h1 className=" text-xs md:text-sm font-bold">Save my path</h1>
        </Button>
      </Link>
    </div>
  
    <div className="map absolute top-0 left-0 w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.286273920956!2d80.76303356372034!3d7.000854385807576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3802ac4e14a3b%3A0x2e692126d447a56f!2sPidurutalagala!5e0!3m2!1sen!2slk!4v1715668874106!5m2!1sen!2slk"
        width="100%"
        height="100%"
        className="border-0 opacity-100"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </section>
  );
};

export default Path;
