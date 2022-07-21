// import React, { useState } from 'react';


// function Data(props) {

//     const apiRequest = url => fetch(url).then(response => response.json())

//     const apiRequestEventSite = () => {
//         return apiRequest(`https://flexweather.com/api/`${}).then(results => {
//             return results.map(results => {
//                 return {
//                     ES: results.wind_speed
//                 };
//             });
//         });
//     };
    
//     const apiRequestNews = () => {
//         return apiRequest("https://news/api/url").then(results => {
//             return results.big_stories.map(article => {
//                 return {
//                     title: article.title
//                     /* ... */
//                 };
//             });
//         });
//     };
    
//     const apiRequestBuzzFeed = () => {
//         return apiRequest("https://buzzfeed/api/url").then(results => {
//             return results.big_stories.map(article => {
//                 return {
//                     title: article.title
//                     /* ... */
//                 };
//             });
//         });
//     };



//     return (
//         <div>
//             hi from data
//         </div>
//     );
// }

// export default Data;