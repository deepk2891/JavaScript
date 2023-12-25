const OPENWEATHER_API_KEY = '080e1aca982aee36c05900f26c7c752b';

const messageElement = document.querySelector('.message');
document.getElementById('searchButton').addEventListener('click',function () {
    const cityNameSearch = document.getElementById('cityNameSearch');

    if (cityNameSearch.value === '')
    {
        messageElement.innerText = 'city name cannot be empty!';
        messageElement.classList.remove('text-gray-500');
        messageElement.classList.add('text-red-400');
    } else
    {
        messageElement.innerText = 'Search the city name';
        messageElement.classList.remove('text-red-400');
        messageElement.classList.add('text-gray-500');

        const cityName = cityNameSearch.value;
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=${ OPENWEATHER_API_KEY }&units=metric`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(result => {
                updateCard(result);
                console.log(result);
            })
            .catch(error => console.error(error));
    }
});

function updateCard (weatherData) {
    document.querySelector('.temp').textContent = `${ weatherData.main.temp.toFixed(0) }°C`;
    document.querySelector('.temp_max').textContent = `Max${ weatherData.main.temp_max }°C`;
    document.querySelector('.temp_min').textContent = `Min${ weatherData.main.temp_min }°C`;
    document.querySelector('.wind_speed').textContent = `${ weatherData.wind.speed } km/h`;
    document.querySelector('.humidity').textContent = weatherData.main.humidity;
    document.querySelector('.visibility').textContent = weatherData.visibility;
}
