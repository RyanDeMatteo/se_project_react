import React from "react";
import "./ClothesSection.css";
import "../../ItemCard/ItemCard.css";
import ItemCard from "../../ItemCard/ItemCard.js";

function ClothesSection({ clothingItems = [], handleCardClick, openModal }) {
  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your Items</p>
        <button className="clothes-section__add-button" onClick={openModal}>
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              clothingOption={item}
              key={item._id}
              name={item.name}
              image={item.imageUrl}
              weather={item.weather}
              onCardClick={() => {
                handleCardClick(item);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ClothesSection;
