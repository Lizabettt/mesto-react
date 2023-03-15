import CurrentUserContext from "../contexts/CurrentUserContext";
import { 
    useState, 
    useContext,
    useEffect
 } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup( {isOpen, onClose, onUpdateUser}) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  //смена имени
  function changeUserName(evt) {
    setName(evt.target.value);
  }

  //смена about
  function changeUserDescription(evt) {
    setDescription(evt.target.value);
  }

  //обработка формы
  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="profile"
      title="Редактировать профиль"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
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
          value={name}
          onChange={changeUserName}
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
          value={description}
          onChange={changeUserDescription}
        />
        <span className="popup__help popupJob-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
