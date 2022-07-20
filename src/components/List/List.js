import { Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import locationData from './locations.json';


function List() {
    const [data, setData] = useState([]);
    
    let list = locationData.map(item => {
        return (
            <div 
                className='locationName' 
                key={item.name}>
                <p>{item.name}</p>
                <button>
                    <Link to={`/MoreInfo/${item.name}`}>{'See More'}</Link>
                </button>               
            </div>        
        );
    });
    return(
        <div>
            <Link to='/'>HomePage</Link>
            <Routes>
                <Route path="../Homepage.js"></Route>   
            </Routes>
            <h2>How's the wind today?</h2>
            {list}
        </div>
    );

}

export default List;