import React, { useContext } from "react";
import "./Main.css";
import ItemCard from "../ItemCard/ItemCard.js";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherData, clothingItems, onCardClick }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const actualWeather = weatherData.temperature;

  const getWeatherType = () => {
    if (actualWeather >= 86) {
      return "hot";
    } else if (actualWeather >= 66 && actualWeather <= 85) {
      return "warm";
    } else if (actualWeather <= 65) {
      return "cold";
    }
  };

  function filterClothing(card) {
    return card.weather === getWeatherType();
  }

  const clothingOptions = clothingItems.filter((items) =>
    filterClothing(items)
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <h3 className="main__header">
        Today it's{" "}
        {currentTemperatureUnit === "F"
          ? weatherData.temperatureF
          : weatherData.temperatureC}{" "}
        and it is {getWeatherType()} / You may want to wear:
      </h3>
      <div className="main__container">
        <ul className="main__items">
          {clothingOptions.map((item, index) => (
            <ItemCard
              clothingOption={item}
              key={index}
              name={item.name}
              image={item.imageUrl}
              weather={item.weather}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
