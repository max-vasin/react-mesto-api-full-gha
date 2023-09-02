import React from "react";
import okRegister from './../images/Okregister.png';
import noRegister from './../images/Noregister.png';

function InfoTooltip({ onClose, isOpen, registered }) {

  return (
    <section className={`popup ${isOpen ? `popup_opened` : ""}`}>
    <div className={`popup__container popup__container_register`}>
      <img src={registered ? okRegister : noRegister} alt="" className="popup__register-image"/>
      <h2 className="popup__title popup__title_register">{`${registered ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
      <button onClick = {onClose} type="button" className="popup__close-btn"/>
    </div>
  </section>
  )
}

export default InfoTooltip;