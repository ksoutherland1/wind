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
