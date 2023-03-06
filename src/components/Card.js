export default function Card({ card, showСard }) {
  return (
    <li className="elements__card">
      <img
        className="elements__pic"
        src={card.link}
        alt={card.name}
        onClick={() => showСard(card)}
      />
      <button className="elements__basket" type="button"></button>
      <div className="elements__box">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-box">
          <button className="elements__like" type="button"></button>
          <span className="elements__like-span">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}
