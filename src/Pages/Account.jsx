import img13 from '../images/img13.png'
import img14 from '../images/img14.png'
import img15 from '../images/img15.png'
import img17 from '../images/img17.png'
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage } from "react-icons/fa6";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { Button, Card } from 'antd'
import { useState } from 'react';
import ShareModal from '../Modals/ShareModal';


const Account = () => {

    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        setShowModal(true);
      };
  
  return (
    <section className='bg-slate-300 min-h-screen absolute w-full z-[-1]'>
    <div className='ml-4 md:ml-[150px]'>
        <img className="w-full md:w-96 h-52 rounded-tl-xl rounded-tr-xl mt-12 md:mt-[192px] md:ml-[100px]" src={img13} />
        <div className="w-full md:w-96 h-auto md:h-96 bg-white shadow-xl relative md:absolute top-[400px] md:top-[400px] left-0 md:left-[250px] rounded-br-xl rounded-bl-xl">
            <img className="w-24 h-24 md:w-36 md:h-36 mx-auto md:ml-[110px] -mt-[70px]" src={img14} />
            <h1 className="text-black text-xl font-semibold capitalize text-center md:text-left md:ml-20 mt-4">Kavishka Senavirathna</h1>
            <div className="w-full md:w-44 h-auto md:h-11 relative mx-auto md:ml-20 md:mt-1">
                <h1 className="absolute left-1/2 md:left-[13px] transform -translate-x-1/2 md:translate-x-0 top-0 text-black text-2xl font-semibold font-['Inter'] capitalize">250</h1>
                <h1 className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 top-[29px] text-black text-xs font-normal font-['Inter'] capitalize">Connections</h1>
                <div className="absolute w-10 h-px left-1/2 md:left-[110px] transform -translate-x-1/2 md:translate-x-0 top-[6px] origin-top-left rotate-90 border border-black"></div>
                <h1 className="absolute left-1/2 md:left-[149px] transform -translate-x-1/2 md:translate-x-0 top-[29px] text-black text-xs font-normal font-['Inter'] capitalize">hikes</h1>
                <h1 className="absolute left-1/2 md:left-[149px] transform -translate-x-1/2 md:translate-x-0 top-0 text-black text-2xl font-bold font-['Inter'] capitalize">10</h1>
            </div>
            <h1 className='flex items-center ml-16 md:ml-32 mt-3 font-bold'><LiaUserFriendsSolid className='mr-2 mt-2'/>My community</h1>
            <h1 className='flex item-center ml-20 md:ml-36 mt-3 font-bold'><FaRegMessage className='mr-2 mt-2' />Messages</h1>
            <h1 className='flex item-center ml-20 md:ml-36 mt-3 font-bold'> <FaRegUser className='mr-2 mt-1' />Profile</h1>
            <h1 className='flex items-center ml-20 md:ml-36 mt-3 font-bold'><IoSettingsOutline className='mr-2'/>Settings</h1>
        </div>
        <Button 
        className='w-full md:w-96 h-12 md:h-20 bg-white rounded-xl shadow mt-6 md:top-[400px] mx-auto md:ml-24'>
            <h1 className="text-xs md:text-sm font-bold">Edit details</h1>
        </Button>

        
    </div>
    <div className='ml-4 md:ml-[150px]'>
        <div className='mt-6 md:ml-[500px] md:-mt-[300px]'>
            <div>
                <h1 className="text-black text-2xl md:text-4xl font-bold leading-loose">Search Hikes</h1>
                <h1 className="text-black text-base font-normal leading-loose lg:mt-2 md:-mt-3">Find your saved hikes</h1>
            </div>
            <input className="w-full md:w-[996px] h-14 bg-white rounded-xl shadow px-3 mt-2" placeholder='Search'></input>
        </div>
    </div>
    <div className='ml-4 md:ml-[150px]'>
        <div className="w-full md:w-[1000px] h-auto md:h-[530px] bg-white rounded-xl shadow-xl mt-6 md:ml-[500px] md:absolute top-[350px]">
            <h1 className="text-black text-xl font-bold leading-normal ml-5 mt-3">Saved hikes</h1>
            <h1 className="text-black text-base leading-normal ml-[90%] md:ml-[900px] -mt-6 font-bold">view all</h1>
            <Card className='w-full md:w-[950px] h-auto md:h-44 bg-white rounded-xl shadow-xl mt-5 mx-auto md:ml-6'>
                <img className="w-32 h-[177px] md:w-48 rounded-tl-xl rounded-bl-xl -mt-[25px] -ml-[25px]" src={img15} />
                <h1 className="text-justify text-black text-base font-extralight mt-4 md:-mt-40 ml-4 md:ml-44">While neighboring Sigiriya gets more attention, Pidurangala Rock offers a less crowded alternative with equally stunning views. The hike to the top involves some steep sections but rewards hikers with panoramic views of Sigiriya Rock and the surrounding landscape.</h1>
                <div>
                <Button  onClick={handleButtonClick} className='ml-[80%] md:ml-[830px] bg-teal-800 w-20 h-9 mt-4 md:mt-10'>
                    <h1 className="text-white text-base font-normal leading-loose">Share</h1>
                </Button>
                <ShareModal showModal={showModal} setShowModal={setShowModal} />
                </div>
               
            </Card>
            <Card className='w-full md:w-[950px] h-auto md:h-44 bg-white rounded-xl shadow-xl mt-10 mx-auto md:ml-6'>
                <img className="w-32 h-[177px] md:w-48 rounded-tl-xl rounded-bl-xl -mt-[25px] -ml-[20px]" src={img17} />
                <h1 className="text-justify text-black text-base font-extralight mt-4 md:-mt-40 ml-4 md:ml-44">Situated in central Sri Lanka, the Knuckles Range is a UNESCO World Heritage Site known for its biodiversity and scenic beauty. There are numerous trekking trails here ranging from easy walks to more challenging hikes that offer breathtaking views of valleys, waterfalls, and cloud forests.</h1>
                <Button className='ml-[80%] md:ml-[830px] bg-teal-800 w-20 h-9 mt-4 md:mt-10'>
                    <h1 className="text-white text-base font-normal leading-loose">Share</h1>
                </Button>
            </Card>
        </div>
    </div>
</section>
  )
}

export default Account