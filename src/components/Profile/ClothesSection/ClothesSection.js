import React from "react";
import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard.js";

function ClothesSection({ clothingItems = [], handleCardClick, openModal }) {
  return (
    <div>
      <div className="main__items">
        {clothingOptions.map((item) => (
          <ItemCard
            clothingOption={item}
            key={item._id}
            onCardClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}

export default ClothesSection;
