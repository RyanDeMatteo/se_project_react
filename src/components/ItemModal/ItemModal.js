import React from 'react';
import "./ItemModal.css";

function ItemModal({ isOpen, name, card, onClose }) {
    return (
        <div
        className={
            isOpen
            ? `item-modal modal_type_${name}`
            : `modal_type_${name} item-modal_hidden`
        }
        >
            <div className="item-modal__container">
                <button
                  onClick={onClose}
                  type="button"
                  className="item-modal__button"
                  alt="close button"
                ></button>
                <img
                  src={card.link}
                  alt={`${card.name}`}
                  className="item-modal__image"
                />
                <p className="item-modal__title">{card.name}</p>
                <p className="item-modal__description">Weather: {card.weather}</p>
            </div>
        </div>
    )
}

export default ItemModal