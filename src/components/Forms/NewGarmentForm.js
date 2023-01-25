import React from "react";

function NewGarmentModal() {
  return (
    <>
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
    </>
  );
}

export default NewGarmentModal;
