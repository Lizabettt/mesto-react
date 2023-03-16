import { useRef } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({
  isOpen,
  onClose,
  onUpdateAvatarUser,
}) {
  const avatar = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatarUser({
      avatar: avatar.current.value,
    });
  }

  return (
    <PopupWithForm
      name="user-foto"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-input">
        <input
          className="popup__input popup__input_type_avatar"
          id="popupAvatar"
          type="text"
          placeholder="Введите адрес"
          name="avatar"
          minLength="2"
          maxLength="200"
          required
          autoComplete="off"
          ref={avatar}
        />
        <span className="popup__help popupAvatar-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
