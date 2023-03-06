import {useState} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDataCards, setDataCards] = useState({});
  const [chooseCard, setChooseCard] = useState(null);

  //смена аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  //смена профиля
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  //добавление ново карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  //посмотреть карточку поближе:)
  const handleShowСardClick = (card) => {
    setChooseCard(true);
    setDataCards(card);
  };
  //все закрой
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setChooseCard(null);
  }
  //разметка
  return (
    <div>
      <div className="page">
        <Header />
        <Main
          changeAvatar={handleEditAvatarClick}
          changeProfile={handleEditProfileClick}
          addPlace={handleAddPlaceClick}
          showСard={handleShowСardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <fieldset className="popup__form-input">
          <input
            className="popup__input popup__input_type_name"
            id="popupName"
            type="text"
            placeholder="Имя пользователя"
            name="name"
            minLength="2"
            maxLength="40"
            required
            autoComplete="off"
          />
          <span className="popup__help popupName-error"></span>
          <input
            className="popup__input popup__input_type_job"
            id="popupJob"
            type="text"
            placeholder="Вид деятельности"
            name="about"
            minLength="2"
            maxLength="200"
            required
            autoComplete="off"
          />
          <span className="popup__help popupJob-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="add-new-card"
        title="Новое место"
        btnText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="popup__help popupLinkPlace-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="user-foto"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="popup__help popupAvatar-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm
        name="delete"
        title="Вы уверены?"
        btnText="Да"
      ></PopupWithForm>

      <ImagePopup
        name="img"
        card={isDataCards}
        isOpen={chooseCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}