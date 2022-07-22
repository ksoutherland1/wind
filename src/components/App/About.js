

function About(props) {
    return (
        <div>
            <main className="about">
                <h2>About Us!</h2>
                <div id="about-p">
                    <p>We call on FlexWeather API</p>
                    <p>Suggest a Location below!</p>
                </div>
            </main>
        </div>
    );
}

export default About;


// const initialState = {
//             latitude: 0,
//             longitude: 0
//         }
//         const [latlongState, setlatlongState] = useState(initialState)
//         
//         const handleChange = (event) => {
    
//             setlatlongState({...latlongState, [event.target.id]: event.target.value})
    
//         }

        // const myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");

        // const requestOptions = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     redirect: 'follow'
        // };