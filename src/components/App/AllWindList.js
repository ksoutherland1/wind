
import { useState, useEffect } from 'react';
import axios from 'axios';
import RenderData from './RenderData';



function AllWindList() {
    
    const [infoData, setInfoData] = useState([]);

    const urls = ["https://flexweather.com/api/now?lat=45.714848&lon=-121.516733&units=imperial", "https://flexweather.com/api/now?lat=45.6948&lon=-120.7359&units=imperial", "https://flexweather.com/api/now?lat=45.6960&lon=-121.2862&units=imperial", "https://flexweather.com/api/now?lat=45.6723&lon=-121.2684&units=imperial", "https://flexweather.com/api/now?lat=45.6957&lon=-121.8845&units=imperial"];

    useEffect(() => {
        fetchCurrentData();
        // eslint-disable-next-line
}, []);

    const fetchCurrentData = () => {
        const promises = urls.map(url => axios.get(url));

        Promise.all(promises).then(responses => {
            let data = [];
            responses.forEach(response => {
                data = data.concat(response.data);
            });
            setInfoData(data)
        }
        ).catch(error => console.log('error', error));
    }

    return (
        <>
            <RenderData infoData={infoData} />
        </>
    )

}
export default AllWindList;
