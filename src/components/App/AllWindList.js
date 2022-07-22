import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import axios from 'axios';


//  useEffect(() => {
//     Promise(); console.log('component did mount');
// },[]);


const urls = ["https://flexweather.com/api/now?lat=45.714848&lon=-121.516733&units=imperial", "https://flexweather.com/api/now?lat=45.6948&lon=-120.7359&units=imperial", "https://flexweather.com/api/now?lat=45.6960&lon=-121.2862&units=imperial", "https://flexweather.com/api/now?lat=45.6723&lon=-121.2684&units=imperial", "https://flexweather.com/api/now?lat=45.6957&lon=-121.8845&units=imperial"];

const headers = {
    'Accept': 'application/json'
};
function AllWindList() {
    const [infoData, setInfoData] = useState([]);

    const promises = urls.map(url => axios.get(url, { headers }));

    Promise.all(promises).then(responses => {
        let data = [];

        responses.forEach(response => {
            data = data.concat(response.data);
            console.log(data)
        });
        setInfoData(data)
    },
    );
}
   // export default AllWindList;



    // return(
    //     <div
    //         className="windlist"
    //     >
    //         <h2>How's the wind today?</h2>
    //         {
    //             locations.map(item => {
    //                 return (
    //                     <div
    //                         className='locationName'
    //                         id={item.name}
    //                         key={item.name}>
    //                         <h4 className='windlist-itemname'>{item.name}</h4>
    //                         <p className='windlist-currentwind'>Current Windspeed: {item.currentWind}mph </p>
    //                         <button className='windlist-moreinfo'>
    //                             <Link to='/MoreInfo' className={`chose ${item.name}`}>{'See More'}</Link>
    //                             <Routes>
    //                                 <Route path='/MoreInfo' element={<MoreInfo />} />
    //                             </Routes>
    //                         </button>
    //                     </div>
    //                 );
    //             })
    //         }
    //         {/* <FetchData /> */}
    //     </div>
    // )

// const urlBase = 'https://flexweather.com/api/'

// function AllWindList({ locations, setCurrentData, currentData}) {


//     const [windArr, setWindArr] = useState(initialWind);

//     const fetchCurrentData = () => {
//         for (let i = 0; i < locations.length; i++) {
//             const url = `${urlBase}now?lat=${locations[i].lat}&lon=${locations[i].lon}&units=imperial`;
                // Promise.all(promises).then(responses => {
                //     let data = [];

                //     responses.forEach(response => {
                //         data = data.concat(response.data.wind_speed);
                            //console.log(data)
//                 .then(response => response.json())
//                 .then((data) => {
//                     console.log(i, data, data.wind_speed);

//                     //let newArr = [windArr];
//                     // newArr.push(data.wind_speed);
//                     // setWindArr(newArr);
//                     // this.setCurrentData(currentData => ({
//                     //     myArray: [...currentData, { [locations[i].currentwind]: data.wind_speed }],
//                     // }))
//                     // // setCurrentData({ [locations[i].currentWind]: data.wind_speed })
//                     // console.log(newArr)
//                     //console.log(windArr)
//                     // let windNew = data.wind_speed;
//                     // setCurrentData(windNew)
//                     // console.log(windNew);
//                     // console.log(currentData)
//                 })
//                 .catch(error => console.log('error', error));
//             }
//         }

//     useEffect(() => {
//         fetchCurrentData(); console.log('component did mount');
//     },[]);

//     return (
//         <div
//             className="windlist"
//         >
//             <h2>How's the wind today?</h2>
//             {
//                 locations.map(item => {
//                     return (
//                         <div
//                             className='locationName'
//                             id={item.name}
//                             key={item.name}>
//                             <h4 className='windlist-itemname'>{item.name}</h4>
//                             <p className='windlist-currentwind'>Current Windspeed: {item.currentWind}mph </p>
//                             <button className='windlist-moreinfo'>
//                                 <Link to='/MoreInfo' className={`chose ${item.name}`}>{'See More'}</Link>
//                                 <Routes>
//                                     <Route path='/MoreInfo' element={<MoreInfo />} />
//                                 </Routes>
//                             </button>
//                         </div>
//                     );
//                 })
//             }
//             {/* <FetchData /> */}
//         </div>

//     );
// }
// export default AllWindList;