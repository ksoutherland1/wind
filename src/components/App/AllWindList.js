import { Link, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MoreInfo from './MoreInfo';
import axios from 'axios';
import FetchData from './FetchData';


//  useEffect(() => {
//     Promise(); console.log('component did mount');
// },[]);

function AllWindList({ locations }) {

    const urls = ["https://flexweather.com/api/now?lat=45.714848&lon=-121.516733&units=imperial", "https://flexweather.com/api/now?lat=45.6948&lon=-120.7359&units=imperial", "https://flexweather.com/api/now?lat=45.6960&lon=-121.2862&units=imperial", "https://flexweather.com/api/now?lat=45.6723&lon=-121.2684&units=imperial", "https://flexweather.com/api/now?lat=45.6957&lon=-121.8845&units=imperial"];

    const headers = {
        'Accept': 'application/json'
    };

    const [infoData, setInfoData] = useState(locations);

    useEffect(() => {
        fetchCurrentData(); console.log('component did mount');
    }, []);

    const fetchCurrentData = () => {


        const promises = urls.map(url => axios.get(url, { headers }));

        Promise.all(promises).then(responses => {
            let data = [];
            responses.forEach(response => {
                data = data.concat(response.data);
                console.log(data)
            });
            setInfoData(data)
        }
        ).catch(error => console.log('error', error));
    } 

    return (
        <div
            className="windlisttrial"
        >
            <FetchData infoData={infoData}/>
        </div>
    )

}
export default AllWindList;
    
//     for (let i = 0; i < locations.length; i++) {
//         const url = `${urlBase}now?lat=${locations[i].lat}&lon=${locations[i].lon}&units=imperial`;
//         fetch(url)
//             .then(response => response.json())
//             .then((data) => {
//                 return data
//                 // console.log(i, data, data.wind_speed);
//             })
//             .catch(error => console.log('error', error));
//     } console.log(windArr)


    //let newArr = [windArr];
    // newArr.push(data.wind_speed);
    // setWindArr(newArr);
    // this.setCurrentData(currentData => ({
    //     myArray: [...currentData, { [locations[i].currentwind]: data.wind_speed }],
    // }))
    // // setCurrentData({ [locations[i].currentWind]: data.wind_speed })
    // console.log(newArr)
    //console.log(windArr)
    // let windNew = data.wind_speed;
    // setCurrentData(windNew)
    // console.log(windNew);
    // console.log(currentData)
    // const weatherHandler = (data) => {
    //     console.log(data)
    // }
    // weatherHandler()

    // const setCurrent = (data: any) => {
    //     setCurrentWeather({
    //         wind_speed: data.data.wind_speed
    //     });
    // };




    //setInfoData({ ...infoData, currentWind: data.data }))
    //let newArr = [windArr];
    // newArr.push(data.wind_speed);
    // setWindArr(newArr);
    // this.setCurrentData(currentData => ({
    //     myArray: [...currentData, { [locations[i].currentwind]: data.wind_speed }],
    // }))
    // // setCurrentData({ [locations[i].currentWind]: data.wind_speed })
    // console.log(newArr)
    //console.log(windArr)
    // let windNew = data.wind_speed;
    // setCurrentData(windNew)
    // console.log(windNew);
    // console.log(currentData)

    // return (
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
    // );
