import changeName from "../images/change.svg";
import addCard from "../images/add.svg";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { useContext } from "react";
// import { useEffect, useState } from "react";
// import api from "../utils/Api";

export default function Main({
  changeAvatar,
  changeProfile,
  addPlace,
  showСard,
  cards,
}) {
  // const [userInfoName, setUserInfoName] = useState("");
  // const [userInfoJob, setUserInfoJob] = useState("");
  // const [userAvatar, setUserAvatar] = useState("");
  // const [cards, setCards] = useState([]);

  //получаем данные с сервера
  // useEffect(() => {
  //   Promise.all([api.getUserData(), api.getAllCards()]).then(
  //     ([userData, cardData]) => {
  //       setUserInfoName(userData.name);
  //       setUserInfoJob(userData.about);
  //       setUserAvatar(userData.avatar);

  //       setCards(cardData);
  //     }
  //   );
  // }, []);
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__foto-box">
          <img
            className="profile__foto"
            src={currentUser.avatar}
            alt="Аватар"
          />
          <div className="profile__foto-btn" onClick={changeAvatar}></div>
        </div>
        <div className="profile__name-box">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__change-name" type="button">
            <img
              className="profile__change-name-pic"
              src={changeName}
              alt="Изменить"
              onClick={changeProfile}
            />
          </button>
          <p className="profile__info">{currentUser.about}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          onClick={addPlace}
        >
          <img
            className="profile__button-add-pic"
            src={addCard}
            alt="Добавить"
          />
        </button>
      </section>
      <section className="elements">
        <ul className="elements__grid">
          {cards.map((card) => (
            <Card key={card._id} card={card} showСard={showСard} />
          ))}
        </ul>
      </section>
    </main>
  );
}
