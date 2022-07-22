import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import axios from 'axios';


const urlBase = 'https://flexweather.com/api/'

function AllWindList({ locations, setCurrentData, currentData}) {

    
    const initialWind = {
        currentWindSpeed: 0,
    }
    const [windArr, setWindArr] = useState(initialWind);

    const fetchCurrentData = () => {
        for (let i = 0; i < locations.length; i++) {
            const url = `${urlBase}now?lat=${locations[i].lat}&lon=${locations[i].lon}&units=imperial`;
            fetch(url)
                .then(response => response.json())
                .then((data) => {

                    // let newArr = [windArr];
                    // newArr.push(data.wind_speed);
                    // setWindArr(newArr);
                    // this.setCurrentData(currentData => ({
                    //     myArray: [...currentData, { [locations[i].currentwind]: data.wind_speed }],
                    // }))
                    // // setCurrentData({ [locations[i].currentWind]: data.wind_speed })
                    // console.log(newArr)
                    // console.log(windArr)
                    // console.log(i, data, data.wind_speed);
                    // let windNew = data.wind_speed;
                    // setCurrentData(windNew)
                    // console.log(windNew);
                    // console.log(currentData)
                })
                .catch(error => console.log('error', error));
            }
        }

    useEffect(() => {
        fetchCurrentData(); console.log('component did mount');
    },[]);

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
                            <p className='windlist-currentwind'>Current Windspeed: {item.currentWind}mph </p>
                            <button className='windlist-moreinfo'>
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
export default AllWindList;