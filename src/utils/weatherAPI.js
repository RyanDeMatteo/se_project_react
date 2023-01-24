const getForecastWeather = (latitude, longitude, secretKey) => {
    return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${secretKey}`
    ).then((res) => {
        if (res.ok) {
        return res.json()
        } else {
            return Promise.reject(`Error: ${res.status}`);
        }
    });
};

const filterDataFromWeatherAPI = (data) => {
    if (!data) {
        return null;
    }
    const weather = {};
    weather.city = data.name;
    weather.temperature = data.main.temp;
    weather.condition = data.weather.main;
    weather.temperatureF = `${Math.round(data.main.temp)}°F`;
    return weather;
}

export { getForecastWeather, filterDataFromWeatherAPI }