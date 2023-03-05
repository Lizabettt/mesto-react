import changeName from "../images/change.svg";
import addCard from "../images/add.svg";
import Card from "./Card";
import React from "react";
import api from "../utils/Api";

export default function Main({
  changeAvatar,
  changeProfile,
  addPlace,
  showСard,
}) {
  const [userInfoName, setUserInfoName] = React.useState("");
  const [userInfoJob, setUserInfoJob] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

//получаем данные с сервера
  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getAllCards()]).then(
      ([userData, cardData]) => {
        // idMy = userData._id;
        setUserInfoName(userData.name);
        setUserInfoJob(userData.about);
        setUserAvatar(userData.avatar);

        setCards(cardData);
        console.log(cardData);
      }
    );
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__foto-box">
          <img 
          className="profile__foto" 
          src={userAvatar} 
          alt="Аватар" />
          <div 
          className="profile__foto-btn" 
          onClick={changeAvatar}></div>
        </div>
        <div className="profile__name-box">
          <h1 className="profile__title">{userInfoName}</h1>
          <button className="profile__change-name" type="button">
            <img
              className="profile__change-name-pic"
              src={changeName}
              alt="Изменить"
              onClick={changeProfile}
            />
          </button>
          <p className="profile__info">{userInfoJob}</p>
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
            <Card 
            key={card._id} 
            card={card} 
            showСard={showСard} 
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
