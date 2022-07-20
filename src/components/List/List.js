import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import workspace from './workspace.postman_globals.json';


const urlBase = 'https://flexweather.com/api/'

function List({ currentData, setCurrentData, locations}) {

        useEffect(() => {
    
        const myHeaders = new Headers();
            myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        for (let i = 0; i < locations.length; i++) {
            const url = `${urlBase}now?lat=${locations[i].lat}&lon=${locations[i].lon}&units=imperial`;
        fetch(url, requestOptions)
            .then(response => response.json())
            .then((result) => {
                console.log(i,'sucess', result);
                let newData = locations[i]
            })
            .catch(error => console.log('error', error));
        }
        });
    
    let list = locations.map(item => {
        return (
            <div
                className='locationName' 
                key={item.name}>
                <h4>{item.name}</h4>
                <p>Current Windspeed: {currentData}</p>
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
            {list}
        </>
    );

}
export default List;