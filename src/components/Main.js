import avatar from "../images/kusto.jpg";
import changeName from "../images/change.svg";
import addCard from "../images/add.svg"
export default function Main() {
    return (
        <main className="main">
        <section className="profile">        
          <div className="profile__foto-box">              
            <img className="profile__foto" src={avatar} alt="Аватар" />
            <div className="profile__foto-btn"></div>
          </div>
      <div className="profile__name-box">
        <h1 className="profile__title">Жак-Ив Кусто</h1>
        <button className="profile__change-name" type="button">
          <img
            className="profile__change-name-pic"
            src={changeName}
            alt="Изменить"
          />
        </button>
        <p className="profile__info">Исследователь океана</p>
      </div>
      <button className="profile__button-add" type="button">
        <img
          className="profile__button-add-pic"
          src={addCard}
          alt="Добавить"
        />
      </button>
    </section>
    <section className="elements">
      <ul className="elements__grid">
        <template id="elements-template">
          <li className="elements__card">
            <img className="elements__pic" src="#" alt="#" />
            <button className="elements__basket" type="button"></button>
            <div className="elements__box">
              <h2 className="elements__title"></h2>
              <div className="elements__like-box">
                <button className="elements__like" type="button"></button>
                <span className="elements__like-span">0</span>
              </div>
            </div>
          </li>
        </template>
      </ul>
    </section>
  </main>
    );
  }