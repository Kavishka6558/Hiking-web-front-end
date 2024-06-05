import React, { useState, useEffect } from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBot from 'react-simple-chatbot';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import SOSModal from '../Modals/SOSModal';

const Path = () => {
  const [mapUrl, setMapUrl] = useState(
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.286273920956!2d80.76303356372034!3d7.000854385807576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3802ac4e14a3b%3A0x2e692126d447a56f!2sPidurutalagala!5e0!3m2!1sen!2slk!4v1715668874106!5m2!1sen!2slk'
  );

  const [showModal, setShowModal] = useState(false);
  const [isTracking, setIsTracking] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClick = () => {
    setIsTracking(!isTracking);
  };

  useEffect(() => {
    const markers = [
      { lat: 6.941627783317487, lng: 79.8626324049256 },
    { lat: 7.292525006365691,  lng: 80.63373532877485 }
    ];

    const baseUrl = 'https://www.google.com/maps/embed?pb=';
    const mapParams = [
      '1m18', // Map type
      '1m12', // Map details
      '1m3',  // Viewport
      '1d3153.325466774623',  // Zoom level and distance
      '2d-122.41941548468112', // Longitude
      '3d37.77492927975974',   // Latitude
      '2m3',  // Map view type
      '1f0',  // Field of view
      '2f0',  // Tilt
      '3f0',  // Rotation
      '3m2',  // Map size
      '1i1024', // Width
      '2i768',  // Height
      '4f13.1'  // Zoom level
    ];

    markers.forEach(marker => {
      mapParams.push(`3m1!1s0x0:0x0!4m2!3d${marker.lat}!4d${marker.lng}`);
    });

    const newMapUrl = `${baseUrl}${mapParams.join('!')}`;
    setMapUrl(newMapUrl);
  }, []);

  const steps = [
    {
      id: 'Greet',
      message: 'Hi, Good morning',
      trigger: 'waiting',
    },
    {
      id: 'waiting',
      user: true,
      trigger: 'msg',
    },
    {
      id: 'msg',
      message: 'Where are you on the trail?',
      trigger: 'issues',
    },
    {
      id: 'issues',
      user: true,
      trigger: 'Reply',
    },
    {
      id: 'Reply',
      message: 'Ok',
      end: true
    },
  ];

  return (
    <section className="relative h-screen">
      {/* SOS button */}
      <div className="relative">
        <div className="absolute top-28 left-4 md:right-auto md:left-4 md:top-20 z-10">
          <Button
            onClick={handleButtonClick}
            className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
            <h1 className="text-xs md:text-sm font-bold">SOS</h1>
          </Button>
        </div>
        <SOSModal showModal={showModal} setShowModal={setShowModal} />
      </div>

      {/* Auto save */}
      <div className="absolute top-20 left-4 md:right-auto md:left-4 md:top-[150px] z-10 flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-teal-900 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
          <div className="w-5 h-5 bg-white rounded-full shadow absolute left-0 top-0 peer-checked:translate-x-full peer-checked:bg-white transition-transform duration-200 ease-in-out"></div>
        </label>
        <h1 className="ml-3 text-black text-sm md:text-xl font-bold">Auto Save</h1>
      </div>

      {/* Start tracking button */}
      <div className="absolute top-20 right-4 md:left-auto md:right-4 md:top-[100px] z-10">
        <Button
          onClick={handleClick}
          className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
          <h1 className="text-xs md:text-sm font-bold">
            {isTracking ? 'End tracking' : 'Start tracking'}
          </h1>
        </Button>
      </div>

      {/* Save my path button */}
      <div className="absolute top-32 right-4 md:left-auto md:right-4 md:top-[150px] z-10">
        <Link to="/save">
          <Button className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">
            <h1 className="text-xs md:text-sm font-bold">Save my path</h1>
          </Button>
        </Link>
      </div>

      {/* Map implementation */}
      <div>
        <h1>Map with Markers</h1>
        <iframe
          id="map"
          src={mapUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>

      {/* Chat implementation
      <div className='mt-[430px] ml-[50px] absolute'>
        <Segment floated="left">
          <ChatBot steps={steps} />
        </Segment>
      </div> */}
    </section>
  );
};

export default Path;
