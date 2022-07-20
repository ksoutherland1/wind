import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import locationData from './locations.json';

const urlBase = 'https://flexweather.com/api/'

function List({ currentData, setCurrentData }) {

    useEffect(() => {
        const url = `${urlBase}now?lat=${locationData[0].lat}&lon=${locationData[0].lon}&units=imperial`;
    
    const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(url, requestOptions)
        .then(response => response.json())
        .then((result) => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    })
    
    let list = locationData.map(item => {
        return (
            <div
                className='locationName' 
                key={item.name}>
                <p>{item.name}</p>
                <p>Latitude: {item.lat}</p>
                <p>Longitude: {item.lon}</p>
                <button>
                    <Link to={`/MoreInfo/${item.name}`}>{'See More'}</Link>
                </button>               
            </div>        
        );
    });
    return(
        <>
            <h2>How's the wind today?</h2>
            <p>Current Windspeed: {currentData}</p>
            <p>Test: {locationData[0].lat}</p>
            {list}
        </>
    );

}

export default List;