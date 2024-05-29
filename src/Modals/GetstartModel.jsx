import React from 'react';
import { Button } from 'antd'
import pimg from '../images/pimg.jpg'

function GetstartModel({ showModal, setShowModal }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[1000px]">
        <h2 className="text-xl font-bold mb-4">Piduruthalagala </h2>
        <img src={pimg} className='w-full'/>
        <p className="mb-4 text-justify mt-4">
        While neighboring Sigiriya gets more attention, Pidurangala Rock offers a less crowded alternative with equally stunning views. 
        The hike to the top involves some steep sections but rewards hikers with panoramic views of Sigiriya Rock and the surrounding landscape.
        </p>
        <div className="flex justify-end">
          <Button className="px-4 py-2 bg-gray-300 rounded-lg mr-2 h-10 font-bold" >
            Start
          </Button>
          <Button className="px-4 py-2 bg-teal-900 text-white rounded-lg h-10 font-bold" onClick={() => setShowModal(false)}>
          Cancel
          </Button>
        </div>
      </div>
    </div>
  );
}

export default GetstartModel;
