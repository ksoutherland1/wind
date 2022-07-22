

// function MoreInfo({ infoData }) {
//     return (
//         <div
//                 className="moreinfo"
//             >
//                 <h2>How's the wind today?</h2>
//                 {
//                     infoData.map(item => {
//                         return (
//                             <div
//                                 className='locationName'
//                                 id={item.location}
//                                 key={`moreinfo${item.location}`}>
//                                 <h4 className='moreinfo-itemname'>{item.location}</h4>
//                                 <p className='moreinfo-currentwind'>Current Windspeed: {item.wind_speed}mph </p>
//                             </div>
//                         );
//                     })
//                 }
//             </div>
//     );
// }

// export default MoreInfo;