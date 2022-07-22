// import {Link, Route, Routes } from 'react-router-dom';
// import MoreInfo from './MoreInfo';

function RenderData({ infoData }) {
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
                            id={(item.location).slice(0, 3)}
                            key={item.location}>
                            <div className='locationchildren'>
                                <h4 className='windlist-itemname'>{item.location}</h4>
                                <p className='windlist-currentwind'>Current Windspeed: {item.wind_speed}mph </p>
                                <button className='windlist-moreinfo'>See More
                                    {/* <Link to='/MoreInfo' className={`chose ${item.name}`}>{'See More'}</Link>
                                        <Routes>
                                            <Route path='/MoreInfo' element={<MoreInfo id={item.location}/>} />
                                        </Routes> */}
                                </button>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RenderData;

