import React from "react";
import "./AddItemModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ onAddItem, onCloseModal }) => {
  const [name, setName] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [weatherType, setWeatherType] = React.useState("");

  const handleName = (evt) => {
    setName(evt.target.value);
  };

  const handleImageUrl = (evt) => {
    setImageUrl(evt.target.value);
  };

  const handleWeatherType = (evt) => {
    setWeatherType(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onAddItem(name, imageUrl, weatherType);
  };

  return (
    <ModalWithForm
      title="New garment"
      name="add"
      buttonText="Add garment"
      onClose={onCloseModal}
      handleSubmit={handleSubmit}
    >
      <h4 className="form__label">Name</h4>
      <input
        className="form__input form__input_type_name"
        id="name"
        name="name"
        type="text"
        placeholder="Name"
        minLength="1"
        maxLength="40"
        onChange={handleName}
        value={name}
        required
      />
      <h4 className="form__label">Image</h4>
      <input
        className="form__input form__input_type_image"
        name="image"
        id="link"
        type="url"
        placeholder="Image URL"
        onChange={handleImageUrl}
        value={imageUrl}
        required
      />
      <h4 className="form__label">Select the weather type:</h4>
      <div className="form__radio-container">
        <div className="form__radio">
          <input
            className="form__input_type_radio"
            name="temp"
            value="hot"
            type="radio"
            id="hot"
            onChange={handleWeatherType}
          />
          <label className="form__label-radio" htmlFor="hot">
            Hot
          </label>
        </div>
        <div className="form__radio">
          <input
            className="form__input_type_radio"
            name="temp"
            value="warm"
            type="radio"
            id="warm"
            onChange={handleWeatherType}
          />
          <label className="form__label-radio" htmlFor="warm">
            Warm
          </label>
        </div>
        <div className="form__radio">
          <input
            className="form__input_type_radio"
            name="temp"
            value="cold"
            type="radio"
            id="cold"
            onChange={handleWeatherType}
          />
          <label className="form__label-radio" htmlFor="cold">
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
