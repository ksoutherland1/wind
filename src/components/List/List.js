import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';


const urlBase = 'https://flexweather.com/api/'

function List({ currentData, setCurrentData }) {

        useEffect(() => {
            const url = `${urlBase}now?lat=${locations[0].lat}&lon=${locationData[0].lon}&units=imperial`;
    
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
                console.log(result);
                let newCurrentData = result.wind_speed;
                setCurrentData(newCurrentData);
            })
            .catch(error => console.log('error', error));
        }
    )

    
    let list = locationData.map(item => {
        return (
            <div
                className='locationName' 
                key={item.name}>
                <h4>{item.name}</h4>
                <p>Latitude: {item.lat}</p>
                <p>Longitude: {item.lon}</p>
                <p>Current Windspeed: </p>
                <button>
                    <Link to='/MoreInfo'>{'See More'}</Link>
                    <Routes>
                        <Route path='/MoreInfo' element={<MoreInfo />} />
                    </Routes>
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