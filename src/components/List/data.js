function getData(){
    const url = 'https://api.weather.gov/gridpoints/PQR/151,104/forecast'

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.log(error))
}

export default getData;