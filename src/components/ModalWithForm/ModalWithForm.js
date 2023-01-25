import "./ModalWithForm.css";

function ModalWithForm({ title, buttonText, onClose, children }) {
  return (
    <div className="modal">
      <div className="modal__form-container">
        <button
          className="modal__close-button"
          onClick={onClose}
          type="button"
        ></button>
        <h3 className="modal__form-title">{title}</h3>
        <form className="form">
          {children}
          <button className="form__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
