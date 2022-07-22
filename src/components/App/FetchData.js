import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import MoreInfo from './MoreInfo';

function FetchData({ infoData }) {
        return (
            <div
                className="windlist"
            >
                <h2>How's the wind today?</h2>
                {
                    infoData.map(item => {
                        return (
                            <div
                                className='locationName'
                                id={item.location}
                                key={item.location}>
                                <h4 className='windlist-itemname'>{item.location}</h4>
                                <p className='windlist-currentwind'>Current Windspeed: {item.wind_speed}mph </p>
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

    export default FetchData;

