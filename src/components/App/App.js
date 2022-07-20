import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState} from 'react';
import Homepage from '../Homepage';
import About from '../About';
import List from '../List/List';


function App() {

  const [data, setData] = useState(0);

  return (
    <div>
      <h1>Welcome!</h1>
      <p>Wind Awaits</p>
      <nav>
        <Link to='/List'>Wind in the Gorge</Link>
        <Link to='/About'>About Us</Link>
      </nav>
      <main>
        <Routes>
          <Route path='/List' element={<List currentWindSpeed={data} setCurrentWindSpeed={setData}/>} />
          <Route path='/About' element={<About />} />  
        </Routes>
      </main>
    </div>
  );
}

export default App;
