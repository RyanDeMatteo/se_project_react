import React from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ onClose, handleConfirm, handleCancel }) => {
  return (
    <div className="delete-confirm">
      <div className="delete-confirm__container">
        <button
          onClick={onClose}
          type="button"
          className="delete-confirm__close-button"
          alt="close button"
        />
        <h3 className="delete-confirm__title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          type="button"
          className="delete-confirm__confirm-button"
          onClick={handleConfirm}
        >
          Yes, delete item
        </button>
        <button
          type="button"
          className="delete-confirm__cancel-button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
