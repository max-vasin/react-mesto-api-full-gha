import React from "react";
import * as auth from '../utils/auth.js';
import { useNavigate } from 'react-router-dom';

function Register({ openInfoTooltip, setIsSuccessRegistration }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigate = useNavigate();

  function signIn() {
    navigate('/sign-in');
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.registers(email, password).then((res) => {
      openInfoTooltip();
      setIsSuccessRegistration();
      navigate("/sign-in");
    }).catch((err) => {
      console.error(err);
      openInfoTooltip();
    })
  };
 
  return (
    <div className="register">
      <h2 className="register__title">Региcтрация</h2>
      <form onSubmit = {handleSubmit} action="/apply/" method="POST" name="#" className="register__form">
        
      <label className="register__field">
          <input 
          type="email" 
          placeholder="Email" 
          value={email}
          name="email" 
          id="email-input" 
          className="register__element register__element_key_name" 
          required 
          minLength="2" 
          maxLength="30"
          onChange = {evt => setEmail(evt.target.value)}
          />
          <span className="name-input-error popup__input-error"></span>
        </label>
        <label className="register__field">
          <input 
            type="password" 
            placeholder="Пароль" 
            value={password} 
            name="password" 
            id="password-input" 
            className="register__element register__element_key_img" 
            required
            onChange = {evt => setPassword(evt.target.value)}
          />
          <span className="url-input-error popup__input-error"></span>
        </label>


        <button type="submit" className="register__btn">Зарегистрироваться</button>
        <div className="register__input">
          <p className="register__input-title">Уже зарегистрированы?</p>
          <button onClick={signIn} type="button" className="register__btn-input">Войти</button>
        </div>
      </form>      
    </div>
  )
}

export default Register;