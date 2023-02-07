import "./ModalWithForm.css";

function ModalWithForm({
  title,
  name,
  buttonText,
  onClose,
  children,
  handleSubmit,
}) {
  return (
    <div className="modal">
      <div className="modal__form-container">
        <button
          className="modal__close-button"
          onClick={onClose}
          type="button"
        />
        <h3 className="modal__form-title">{title}</h3>
        <form className="form" name={name} onSubmit={handleSubmit}>
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
