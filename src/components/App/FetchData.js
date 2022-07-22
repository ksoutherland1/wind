// import React, { useState} from 'react';
// import {Link, Route, Routes } from 'react-router-dom';
// import MoreInfo from './MoreInfo';

// function FetchData({ locations }) {
//         return (
//             <div
//                 className="windlist"
//             >
//                 <h2>How's the wind today?</h2>
//                 {
//                     locations.map(item => {
//                         return (
//                             <div
//                                 className='locationName'
//                                 id={item.name}
//                                 key={item.name}>
//                                 <h4 className='windlist-itemname'>{item.name}</h4>
//                                 <p className='windlist-currentwind'>Current Windspeed: {item.currentWind}mph </p>
//                                 <button className='windlist-moreinfo'>
//                                     <Link to='/MoreInfo' className={`chose ${item.name}`}>{'See More'}</Link>
//                                     <Routes>
//                                         <Route path='/MoreInfo' element={<MoreInfo />} />
//                                     </Routes>
//                                 </button>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//         );
//     }

