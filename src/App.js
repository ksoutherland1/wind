import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Homepage from './components/App/Homepage';
import About from './components/App/About';
import AllWindList from './components/App/AllWindList';
import MoreInfo from './components/App/MoreInfo';


function App() {

  const locations = [
    {
        name: 'Event Site',
        lat: 45.714848,
        lon: -121.516733,
        currentWind: 0
    },
    {
        name: 'Rufus',
        lat: 45.6948,
        lon: -120.7359,
        currentWind: 0
    },
    {
        name: 'Lyle',
        lat: 45.6960,
        lon: -121.2862,
        currentWind: 0
    },
    {
        name: 'Rowena',
        lat: 45.6723,
        lon: -121.2684,
        currentWind: 0
    },
    {
        name: 'Stevenson',
        lat: 45.6957,
        lon: -121.8845,
        currentWind: 0
    }
  ];

  const [currentData, setCurrentData] = useState(locations);
  const [forecastData, setForecastData] = useState(0);

  return (
    <>
        <div className='navbar'>
          <Link to='/'>HomePage</Link> 
          <Link to='/AllWindList'>Wind in the Gorge</Link>
          <Link to='/About'>About Us</Link>
        </div>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/AllWindList/*' element={<AllWindList locations={locations} currentData={currentData} setCurrentData={setCurrentData} />} />
          <Route path='/MoreInfo' element={<MoreInfo data={forecastData} setData={setForecastData}/>} />
          <Route path='/About' element={<About />} /> 
        </Routes>
      </main>
    </>
  );
}

export default App;
