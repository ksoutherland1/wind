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
        latitiude: 45.714848,
        longitude: -121.516733
    },
    {
        name: 'Rufus',
        latitiude: 45.6948,
        longitude: -120.7359
    },
    {
        name: 'Lyle',
        latitiude: 45.6960,
        longitude: -121.2862
    },
    {
        name: 'Rowena',
        latitiude: 45.6723,
        longitude: -121.2684
    },
    {
        name: 'Stevenson',
        latitiude: 45.6957,
        longitude: 121.8845
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
          <Route path='/List/*' element={<List currentData={currentData} setCurrentData={setCurrentData}/>} />
          <Route path='/MoreInfo' element={<MoreInfo data={forecastData} setData={setForecastData}/>} />
          <Route path='/About' element={<About />} />  
        </Routes>
      </main>
    </>
  );
}

export default App;
