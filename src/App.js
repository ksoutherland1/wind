import { Routes, Route, Link } from 'react-router-dom';
import React from 'react';
import Homepage from './components/App/Homepage';
import About from './components/App/About';
import AllWindList from './components/App/AllWindList';




function App() {

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
          <Route path='/AllWindList/*' element={<AllWindList  />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
