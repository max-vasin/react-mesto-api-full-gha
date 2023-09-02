import React from "react";
import logo from './../images/logo.svg';
import { useNavigate, useLocation } from 'react-router-dom';

function Header({userData, signUserOut}) {

  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    signUserOut();
    navigateToSignIn(); 
  }

  function navigateToSignUp() {
    navigate('/sign-up');
  }

  function navigateToSignIn() {
    navigate('/sign-in');
  }

  return (
    <header className ="header header_line">
      <div className="header__block-user">
        {location.pathname === "/main" && <p className="header__email">{userData}</p>}
        {location.pathname === "/sign-in" && <button onClick={navigateToSignUp} type="submit" className="header__btn">Регистрация</button>}
        {location.pathname === "/sign-up" && <button onClick={navigateToSignIn} type="submit" className="header__btn">Войти</button>}
        {location.pathname === "/main" && <button onClick={signOut} type="submit" className="header__btn">Выйти</button>}
      </div>
      <img src={logo} alt="Логотип Mesto Russia" className ="header__logo"/>
    </header>
  )
}

export default Header;