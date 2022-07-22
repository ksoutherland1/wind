

function RenderData({ infoData }) {
    return (
        <div
            className="windlist"
        >
            <h2>Wind in the Gorge</h2>
            {
                infoData.map(item => {
                    return (
                        <div
                            className='locationName'
                            id={(item.location).slice(0, 3)}
                            key={item.location}>
                            <div className='locationchildren'>
                                <h4 className='windlist-itemname'>{item.location}</h4>
                                <h5 className='windlist-currentwind'>Current Windspeed: {`${item.wind_speed} ${item.wind_speed_units}`} </h5>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default RenderData;

