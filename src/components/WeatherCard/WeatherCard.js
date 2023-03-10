/* import { weatherConditions } from '../../utils/constants'; */
import { useContext } from "react";
import "./WeatherCard.css";
import cloudDay from "../../images/cloudday.svg";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  if (!weatherData) return null;

  return (
    <div className="weather-card weather-card__background-day">
      <h2 className="weather-card__temp">
        {currentTemperatureUnit === "F"
          ? weatherData.temperatureF
          : weatherData.temperatureC}
      </h2>
      <div className="weather-card__wrapper">
        <img className="weather-card__image" src={cloudDay} alt="cloudy" />
      </div>
    </div>
  );
}

export default WeatherCard;

/* if (!weatherData) return null;

    function selectWeatherCondition(weatherData) {
        const weatherCondition = weatherData?.condition?.toLowerCase() || "";
        if (weatherCondition === null) return "";
        if (weatherCondition.includes("clear")) {
            return "sunday";
        } else if (weatherCondition.includes("clouds")) {
            return "cloudday"
        } else if (weatherCondition.includes("fog")) {
            return "fogday"
        } else if (weatherCondition.includes("rain") ||
            weatherCondition.includes("drizzle")) {
            return "rainday"
        } else if (weatherCondition.includes("snow")) {
            return "snowday"
        } else {
            return "stormday"
        }
    }

    const weatherConditionText = selectWeatherCondition(weatherData);*/
