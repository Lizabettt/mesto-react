import closeIcon from "../images/Close_Icon.png";

export default function PopupWithForm({
  name,
  title,
  isOpen,
  onClose,
  children,
  btnText,
}) {
  return (
    <div
      className={`popup popup_type-${name} 
    ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button className="popup__btn-close" type="button">
          <img
            className="popup__btn-close-pic"
            src={closeIcon}
            alt="Закрыть"
            onClick={onClose}
          />
        </button>
        <h2 className="popup__title">{title}</h2>
        <form
          className={`popup__form popup__form_type-${name}`}
          action="popup__form"
          name="popup__name"
          method="post"
          noValidate
        >
          {children}
          <button className="popup__btn popup__btn-create" type="submit">
            {btnText || 'Сохранить'}
          </button>
        </form>
      </div>
    </div>
  );
}
