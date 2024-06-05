import React from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from 'antd'

function ShareModal({ showModal, setShowModal }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-65">
        <h2 className="text-xl font-bold mb-4">
          Share
          <button onClick={() => setShowModal(false)}
            className=" mr-2 ml-80">
            <IoMdCloseCircle />
            </button>
          </h2>
      
      
        <div className="flex justify-center">
          <Button className="px-4 py-2 bg-gray-300 rounded-lg mr-2 h-10 font-bold">
            Trailmaker
          </Button>
          <Button className="px-4 py-2 bg-green-600 text-white rounded-lg h-10 font-bold">
            Whatsapp
          </Button>
          <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg h-10 font-bold">
           Facebook
          </Button>
          <Button className="px-4 py-2 bg-orange-600 text-white rounded-lg h-10 font-bold">
          Blog
          </Button>
          
          
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
