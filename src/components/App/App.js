import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
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
  const [weatherData, setWeatherData] = useState({});
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const closeAllModals = () => {
    setActiveModal("");
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

  return (
    <div className="app">
      <div className="app__wrapper">
        <Header
          weatherData={weatherData}
          handleAddClick={() => {
            setActiveModal("add");
          }}
        />
        <Main
          weatherData={weatherData}
          defaultClothingItems={defaultClothingItems}
          onCardClick={handleCardClick}
        />
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
    </div>
  );
};

export default App;
