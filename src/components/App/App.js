import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import { latitude, longitude, secretKey } from "../../utils/constants";
import {
  getForecastWeather,
  filterDataFromWeatherAPI,
} from "../../utils/weatherAPI";
import { getItems, addItem, removeItem } from "../../utils/api";

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

  const handleAddItemSubmit = (name, link, weather) => {
    addItem(name, link, weather)
      .then((item) => {
        setClothingItems([...clothingItems, item]);
        closeAllModals();
      })
      .catch((err) => console.log(err));
  };

  const handleItemDelete = (card) => {
    removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
        closeAllModals();
      })
      .catch((err) => console.log(err));
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

  const fetchClothingItems = () => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    fetchClothingItems();
  }, []);
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
                clothingItems={clothingItems}
                onCardClick={handleCardClick}
              />
            </Route>
          </Switch>
          <Footer />
        </div>
        {activeModal === "add" && (
          <AddItemModal
            onCloseModal={closeAllModals}
            onAddItem={handleAddItemSubmit}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            card={selectedCard}
            onClose={closeAllModals}
            onDelete={() => {
              setActiveModal("delete");
            }}
          />
        )}
        {activeModal === "delete" && (
          <DeleteConfirmModal
            name="delete"
            onClose={closeAllModals}
            handleConfirm={() => {
              handleItemDelete(selectedCard);
            }}
            handleCancel={() => {
              setActiveModal("preview");
            }}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
};

export default App;
