import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Homepage from '../Static pages/Homepage';
import About from '../Static pages/About';
import List from '../List/List';
import MoreInfo from '../List/MoreInfo';


function App() {
  const [currentData, setCurrentData] = useState(0);
  const [forecastData, setForecastData] = useState(0);

  const locations = [
    {
        name: 'Event Site',
        lat: 45.714848,
        lon: -121.516733
    },
    {
        name: 'Rufus',
        lat: 45.6948,
        lon: -120.7359
    },
    {
        name: 'Lyle',
        lat: 45.6960,
        lon: -121.2862
    },
    {
        name: 'Rowena',
        lat: 45.6723,
        lon: -121.2684
    },
    {
        name: 'Stevenson',
        lat: 45.6957,
        lon: 121.8845
    }
]

  return (
    <>
      <nav>
        <Link to='/'>HomePage</Link> 
        <Link to='/List'>Wind in the Gorge</Link>
        <Link to='/About'>About Us</Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/List/*' element={<List locations={locations} currentData={currentData} setCurrentData={setCurrentData}/>} />
          <Route path='/MoreInfo' element={<MoreInfo data={forecastData} setData={setForecastData}/>} />
          <Route path='/About' element={<About />} />  
        </Routes>
      </main>
    </>
  );
}

export default App;
