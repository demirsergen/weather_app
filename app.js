const getWeatherBtn = document.getElementById('getWeatherBtn');
const results = document.getElementById('results');



function getWeather() {
    let city = document.getElementById('city').value;
    const key = '6249bd55b2d2b0d72b056ab31dd5797e';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.weather.map(d => {
            const cityName = document.getElementById('name');
            const description = document.getElementById('description');
            const temperature = document.getElementById('temperature');    

            cityName.innerText = `${data.name}, ${data.sys.country}`;
            description.innerText = d.description;
            temperature.innerText = `${Math.floor(data.main.temp)}°C`;

            results.style.display = "block";
            }) 
        })
        .catch(err => console.error(err));
}

getWeatherBtn.addEventListener('click', getWeather);