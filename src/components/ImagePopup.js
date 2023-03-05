import closeIcon from "../images/Close_Icon.png";

export default function ImagePopup({ name, card, isOpen, onClose }) {
  return (
    <div
      className={`popup popup_type-${name} 
    ${isOpen ? "popup_opened" : ""}`}
    >
      <figure className="popup__img-box">
        <img 
        className="popup__img-max" 
        src={card.link} 
        alt={card.name} 
        />
        <figcaption className="popup__img-title">{card.name}</figcaption>
        <button className="popup__btn-close" type="button">
          <img
            className="popup__btn-close-pic"
            src={closeIcon}
            alt="Закрыть"
            onClick={onClose}
          />
        </button>
      </figure>
    </div>
  );
}
