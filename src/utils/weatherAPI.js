import { secretKey } from "./constants.js";

const getForecastWeather = (location, secretKey) => {
    const parsedLocation = `${location.latitude}, ${location.longitude}`;
    return fetch(
        'http://api.weatherapi.com/v1/forecast.json?key$=${secretKey}&q=${parsedLocation}&days=1'
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
    weather.city = data.location.name
    weather.temperature = data.current.temp_f;
    return weather;
}

export { getForecastWeather, filterDataFromWeatherAPI }