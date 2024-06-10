import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import SOSModal from '../Modals/SOSModal';

// Fix marker icon issues with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapWithMarkers = () => {
  const [markersVisible, setMarkersVisible] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [path, setPath] = useState([]);
  const navigate = useNavigate();

  const toggleMarkers = () => {
    if (!markersVisible) {
      // Show markers and create a path
      const newMarkers = [
        { lat: 7.291603333977511, lng: 80.63451622927738, name: 'Kandy' },
        { lat: 7.0149954015223095, lng: 80.77321862519683, name: 'Piduruthalagala' },
      ];
      setMarkers(newMarkers);
      setPath(newMarkers.map(marker => [marker.lat, marker.lng]));
    } else {
      // Hide markers and remove path
      setMarkers([]);
      setPath([]);
      // Navigate to save page
      navigate('/save');
    }
    setMarkersVisible(!markersVisible);
  };

  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapContainer center={[7.291603333977511, 80.63451622927738]} zoom={10} style={{ height: "100%", width: "100%", zIndex: 0 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker key={idx} position={[marker.lat, marker.lng]}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
        {path.length > 0 && <Polyline positions={path} color="blue" />}
      </MapContainer>
      <div>
        <div className="absolute top-28 left-4 md:right-auto md:left-4 md:top-20 z-10">
          <Button onClick={handleButtonClick} className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white">SOS</Button>
        </div>
        <SOSModal showModal={showModal} setShowModal={setShowModal} />
      </div>
      
      <div className="absolute top-20 left-4 md:right-auto md:left-4 md:top-[150px] z-10 flex items-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-checked:bg-teal-900 peer-focus:ring-4 peer-focus:ring-blue-300 transition duration-200 ease-in-out"></div>
          <div className="w-5 h-5 bg-white rounded-full shadow absolute left-0 top-0 peer-checked:translate-x-full peer-checked:bg-white transition-transform duration-200 ease-in-out"></div>
        </label>
        <h1 className="ml-3 text-black text-sm md:text-xl font-bold">Auto Save</h1>
      </div>

      <div className="absolute top-20 right-4 md:left-auto md:right-4 md:top-[100px]">
        <Button className="w-24 md:w-32 h-10 md:h-11 bg-teal-900 rounded-xl shadow backdrop-blur-xl text-white" 
          onClick={toggleMarkers}>{markersVisible ? 'End & Save' : 'Start tracking'}
        </Button>
      </div>
    </div>
  );
};

export default MapWithMarkers;
