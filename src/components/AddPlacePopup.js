import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ 
  isOpen, 
  onClose, 
  onAddPlace 
}) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  //имя карточки
  function changePlaceName(evt) {
    setName(evt.target.value);
  }

  //ссылка
  function changePlaceLink(evt) {
    setLink(evt.target.value);
  }

  //обработка формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({ name, link });
  }

  //разметка
  return (
    <PopupWithForm
      name="add-new-card"
      title="Новое место"
      btnText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-input">
        <input
          className="popup__input popup__input_type_name-place"
          id="popupNamePlace"
          type="text"
          placeholder="Название"
          name="namePlace"
          minLength="2"
          maxLength="30"
          required
          autoComplete="off"
          value={name}
          onChange={changePlaceName}
        />
        <span className="popup__help popupNamePlace-error"></span>
        <input
          className="popup__input popup__input_type_link-place"
          id="popupLinkPlace"
          type="url"
          placeholder="Ссылка на картинку"
          name="linkPlace"
          required
          autoComplete="off"
          value={link}
          onChange={changePlaceLink}
        />
        <span className="popup__help popupLinkPlace-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
