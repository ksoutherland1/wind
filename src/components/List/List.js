import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import locationData from './locations.json';


function List({ currentData, setCurrentData }) {

    useEffect(() => {})
    
    const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // fetch("https://flexweather.com/api/now?lat=45.714848&lon=-121.516733&units=imperial", requestOptions)
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));
    
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
        <>
            <h2>How's the wind today?</h2>
            {list}
        </>
    );

}

export default List;