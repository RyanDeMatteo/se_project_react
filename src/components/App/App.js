import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import NewGarmentModal from "../Forms/NewGarmentForm";
import { latitude, longitude, secretKey } from "../../utils/constants";
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
} from "../../utils/weatherAPI";
import { defaultClothingItems } from "../../utils/clothingItems";

const App = () => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeAllModals = () => {
    setActiveModal("");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    if (latitude && longitude) {
      getForecastWeather(latitude, longitude, secretKey)
        .then((data) => {
          setWeatherData(filterDataFromWeatherAPI(data));
        })
        .catch((err) => console.log(err));
    }
  }, []);

  /* const fetchClothingItems = () => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => console.log(err));
  }; */

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="app__wrapper">
          <Header
            weatherData={weatherData}
            handleAddClick={() => {
              setActiveModal("add");
            }}
          />
          <Switch>
            <Route path="/profile">
              <Profile
                clothingItems={clothingItems}
                handleCardClick={handleCardClick}
                openModal={() => {
                  setActiveModal("add");
                }}
              />
            </Route>
            <Route path="/">
              <Main
                weatherData={weatherData}
                defaultClothingItems={defaultClothingItems}
                onCardClick={handleCardClick}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
        {activeModal === "add" && (
          <ModalWithForm
            title="New Garment"
            buttonText="Add Garment"
            onClose={closeAllModals}
          >
            <NewGarmentModal />
          </ModalWithForm>
        )}
        {activeModal === "preview" && (
          <ItemModal card={selectedCard} onClose={closeAllModals} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
