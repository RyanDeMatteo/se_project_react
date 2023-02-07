import React from "react";
import "./ItemModal.css";

function ItemModal({ card, onClose, onDelete }) {
  return (
    <div className="item-modal">
      <div className="item-modal__container">
        <button
          onClick={onClose}
          type="button"
          className="item-modal__close-button"
          alt="close button"
        />
        <img
          className="item-modal__image"
          src={card.imageUrl}
          alt={`${card.name}`}
        />
        <p className="item-modal__title">{card.name}</p>
        <p className="item-modal__description">Weather: {card.weather}</p>
        <button
          onClick={onDelete}
          type="button"
          className="item-modal__delete-button"
        >
          Delete item
        </button>
      </div>
    </div>
  );
}

export default ItemModal;
