import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';


const urlBase = 'https://flexweather.com/api/'

function List({ locations }) {

    const fetchCurrentData = async () => {

        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        // const requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };
        for (let i = 0; i < locations.length; i++) {
            const url = `${urlBase}now?lat=${locations[i].lat}&lon=${locations[i].lon}&units=imperial`;
            fetch(url)
                .then(response => response.json())
                .then((result) => {
                    console.log(i, result);
                    let newData = result.wind_speed;
                    //setCurrentData(newData);
                    console.log(newData);
                })
                .catch(error => console.log('error', error));
        }
    }

    useEffect(() => {
        fetchCurrentData();
    }, []);

    return (
        <div
            className="windlist"
        >
            <h2>How's the wind today?</h2>
            {
                locations.map(item => {
                    return (
                        <div
                            className='locationName'
                            id={item.name}
                            key={item.name}>
                            <h4 className='windlist-itemname'>{item.name}</h4>
                            <p className='windlist-currentwind'>Current Windspeed: {item.newData} </p>
                            <button classname='windlist-moreinfo'>
                                <Link to='/MoreInfo' className={`chose ${item.name}`}>{'See More'}</Link>
                                <Routes>
                                    <Route path='/MoreInfo' element={<MoreInfo />} />
                                </Routes>
                            </button>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default List;