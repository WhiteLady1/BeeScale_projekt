import React from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import './style.css';

const SignIn = () => {
  return (
    <>
      <Logo />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="Uživatelské jméno" />
            <input type="password" placeholder="Heslo" />
            <button>
              <Link to="/prehled">Přihlásit</Link>
            </button>

            <p className="message">
              Ještě nejsi registrovaný?
              <Link to="/registration">Založ si účet</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
