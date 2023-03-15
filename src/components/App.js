import { useState, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/Api";

export default function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isDataCards, setDataCards] = useState({});
  const [chooseCard, setChooseCard] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [cards, setCards] = useState([]); //перенесли из мейн

  //смена аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  //смена профиля
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  //добавление новой карточки
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  //посмотреть карточку поближе:)
  const handleShowСardClick = (card) => {
    setChooseCard(true);
    setDataCards(card);
  };
  // 1.Есть лайк? 2. запрос в апи на обновление
  function handleCardLike(card) {
    const isLiked = card.likes.some((selectedCard) => 
    selectedCard._id === currentUser._id
    );
    api
    .changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      setCards((state) =>
        state.map((selectedCard) =>
          selectedCard._id === card._id ? newCard : selectedCard
        )
      );
    });
  }
  //удаляем карточку
  const handleCardDelete = (card) => {
    api
    .deleteCard(card._id)
    .then(() => {
      setCards(() =>
        cards.filter((selectedCard) => 
        selectedCard._id !== card._id)
      );
    })
  }
  //все закрой
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setChooseCard(null);
  }
  
 
  //грузим карточки и инфо пользователя с сервера
  useEffect(() => {
    Promise.all([api.getUserData(), api.getAllCards()]).then(
      ([userData, cardData]) => {
        setCurrentUser(userData);

        setCards(cardData);
      }
    );
  }, []);
  
  //разметка
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page">
          <Header />
          <Main
            changeAvatar={handleEditAvatarClick}
            changeProfile={handleEditProfileClick}
            addPlace={handleAddPlaceClick}
            cards={cards}
            showСard={handleShowСardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
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
      </CurrentUserContext.Provider>
    </div>
  );
}
