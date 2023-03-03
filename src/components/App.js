import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
      <div className="popup popup_type-profile">
        <div className="popup__container">
          <button className="popup__btn-close" type="button">
            <img
              className="popup__btn-close-pic"
              src="<%=require('./images/Close_Icon.png')%>"
              alt="Закрыть"
            />
          </button>
          <h2 className="popup__title">Редактировать профиль</h2>
          <form
            className="popup__form popup__form_type-profile"
            action="popup__form"
            name="popup__name"
            method="post"
            novalidate
          >
            <fieldset className="popup__form-input">
              <input
                className="popup__input popup__input_type_name"
                id="popupName"
                type="text"
                placeholder="Имя пользователя"
                name="name"
                minlength="2"
                maxlength="40"
                required
                autocomplete="off"
              />
              <span className="popup__help popupName-error"></span>
              <input
                className="popup__input popup__input_type_job"
                id="popupJob"
                type="text"
                placeholder="Вид деятельности"
                name="about"
                minlength="2"
                maxlength="200"
                required
                autocomplete="off"
              />
              <span className="popup__help popupJob-error"></span>
            </fieldset>
            <button className="popup__btn popup__btn-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type-add-new-card">
        <div className="popup__container">
          <button className="popup__btn-close" type="button">
            <img
              className="popup__btn-close-pic"
              src="<%=require('./images/Close_Icon.png')%>"
              alt="Закрыть"
            />
          </button>
          <h2 className="popup__title">Новое место</h2>
          <form
            className="popup__form popup__form_type-add-new-card"
            action="popup__form"
            name="popup__name"
            method="post"
            novalidate
          >
            <fieldset className="popup__form-input">
              <input
                className="popup__input popup__input_type_name-place"
                id="popupNamePlace"
                type="text"
                placeholder="Название"
                name="namePlace"
                minlength="2"
                maxlength="30"
                required
                autocomplete="off"
              />
              <span className="popup__help popupNamePlace-error"></span>
              <input
                className="popup__input popup__input_type_link-place"
                id="popupLinkPlace"
                type="url"
                placeholder="Ссылка на картинку"
                name="linkPlace"
                required
                autocomplete="off"
              />
              <span className="popup__help popupLinkPlace-error"></span>
            </fieldset>
            <button className="popup__btn popup__btn-create" type="submit">
              Создать
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type-img">
        <figure className="popup__img-box">
          <img className="popup__img-max" src="#" alt="#" />
          <figcaption className="popup__img-title"></figcaption>
          <button className="popup__btn-close" type="button">
            <img
              className="popup__btn-close-pic"
              src="<%=require('./images/Close_Icon.png')%>"
              alt="Закрыть"
            />
          </button>
        </figure>
      </div>
      <div className="popup popup_type-user-foto">
        <div className="popup__container">
          <button className="popup__btn-close" type="button">
            <img
              className="popup__btn-close-pic"
              src="<%=require('./images/Close_Icon.png')%>"
              alt="Закрыть"
            />
          </button>
          <h2 className="popup__title">Обновить аватар</h2>
          <form
            className="popup__form popup__form_type-add-new-avatar"
            action="popup__form"
            name="popup__name"
            method="post"
            novalidate
          >
            <fieldset className="popup__form-input">
              <input
                className="popup__input popup__input_type_avatar"
                id="popupAvatar"
                type="text"
                placeholder="Введите адрес"
                name="avatar"
                minlength="2"
                maxlength="200"
                required
                autocomplete="off"
              />
              <span className="popup__help popupAvatar-error"></span>
            </fieldset>
            <button className="popup__btn popup__btn-save" type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </div>
      <div className="popup popup_type-delete">
        <div className="popup__container">
          <button className="popup__btn-close" type="button">
            <img
              className="popup__btn-close-pic"
              src="<%=require('./images/Close_Icon.png')%>"
              alt="Закрыть"
            />
          </button>
          <h2 className="popup__title">Вы уверены?</h2>
          <form className="popup__form popup__form_type-delete-card">
            <button className="popup__btn popup__btn-save" type="submit">
              Да
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

