import React from "react";
import './Main.css'
import ItemCard from "../ItemCard/ItemCard.js"
import WeatherCard from "../WeatherCard/WeatherCard.js"

function Main({ weatherData, defaultClothingItems, onCardClick }) {
    const actualWeather = weatherData.temperature

    const getWeatherType = () => {
        if (actualWeather >= 86) {
            return 'hot';
        } else if (actualWeather >= 66 && actualWeather <= 85) {
            return 'warm';
        } else if (actualWeather <= 65) {
            return 'cold';
        }
    };

    function filterClothing(card) {
        if (card.weather === getWeatherType()) {
            return true;
        } else {
            return false;
        }
    }

    const clothingOptions = defaultClothingItems.filter((items) => 
        filterClothing(items)
    );

    return (
        <main className='main'>
            <WeatherCard weatherData={weatherData} />
                <h3 className='main__header'>Today it's {Math.round(actualWeather)}°F / You may want to wear:</h3>
                <ul className='main__items'>
                    {clothingOptions.map((item) => (
                    <ItemCard
                      isOpen="false"
                      clothingOption={item}
                      key={item._id}
                      name={item.name}
                      image={item.link}
                      weather={item.weather}
                      onCardClick={onCardClick}
                    />
                    ))}
                </ul>
        </main>
    )
}

export default Main