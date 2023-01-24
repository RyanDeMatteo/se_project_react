import React, { useState, useEffect } from 'react';
import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import { location, secretKey } from '../../utils/constants'
import { getForecastWeather, filterDataFromWeatherAPI } from '../../utils/weatherAPI';
import { defaultClothingItems } from '../../utils/clothingItems';

const App = () => {
  const [weatherData, setWeatherData] = React.useState({});
  const [activeModal, setActiveModal] = useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview")
  }

  const closeAllModals = () => {
    setActiveModal(false);
  }

  useEffect(() => {
    if (location.latitude && location.longitude) {
      getForecastWeather(location, secretKey)
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
        openModal={() => {
          setActiveModal("add");
        }}
        />
        <Main
        weatherData={weatherData}
        defaultClothingItems={defaultClothingItems}
        handleCardClick={handleCardClick}
        />
        <Footer />
      </div>
      {activeModal === "add" && (
        <ModalWithForm
        isOpen={activeModal === "add"}
        name="add"
        title="New Garment"
        buttonText="Add Garment"
        onClose={closeAllModals}
        >
          <h4 className="form__label">Name</h4>
          <input
          className="form__input form__input_type_name"
          name="name"
          type="text"
          placeholder="Name"
          minLength="1"
          maxLength="40"
          required
          />
          <h4 className="form__label">Image</h4>
          <input
          className="form__input form__input_type_image"
          name="image"
          type="url"
          placeholder="Image URL"
          required
          />
          <h4 className="form__label">Select the weather type:</h4>
          <div className="form__radio-container">
            <div className="form__radio">
            <input
            className="form__input_type_radio"
            name="temp"
            value="Hot"
            type="radio"
            id="hot"
            />
            <label className="form__label-radio" htmlFor="hot">
              Hot
            </label>
            </div>
            <div className="form__radio">
            <input
            className="form__input_type_radio"
            name="temp"
            value="Warm"
            type="radio"
            id="warm"
            />
            <label className="form__label-radio" htmlFor="warm">
              Warm
            </label>
            </div>
            <div className="form__radio">
            <input
            className="form__input_type_radio"
            name="temp"
            value="Cold"
            type="radio"
            id="cold"
            />
            <label className="form__label-radio" htmlFor="cold">
              Cold
            </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      <ItemModal
      isOpen={activeModal === "preview"}
      name={"preview"}
      card={selectedCard}
      onClose={closeAllModals}
      />
    </div>
  );
};

export default App;
