import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Create from './Pages/Create';
import Home  from './Pages/Home';
import Trails from './Pages/Trails';
import Hikes from './Pages/Hikes'
import Save from './Pages/Save'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Path from './Pages/Path'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/trails' element={<Trails/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/hikes' element={<Hikes/>}/>
        <Route path='/save' element={<Save/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/path' element={<Path/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
