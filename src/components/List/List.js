import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import locationData from './locations.json';

const urlBase = 'https://flexweather.com/api/'

function List({ currentData, setCurrentData }) {

    useEffect(() => {
        const url = `${urlBase}now?lat=45.714848&lon=-121.516733&units=imperial`;
    
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
            let newCurrentData = result.wind_speed;
            console.log(newCurrentData)
            setCurrentData(newCurrentData);
        })
        .catch(error => console.log('error', error));
    })
    
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
            <p>Current Windspeed: {currentData}</p>
            {list}
        </>
    );

}

export default List;