import React from 'react';

import { Link } from 'react-router-dom';
import './style.css';
import GoogleBtn from '../../../GoogleBtn/GoogleBtn';

const SignIn = () => {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="Uživatelské jméno" />
            <input type="password" placeholder="Heslo" />
            <button>
              <Link to="/prehled">Přihlásit</Link>
            </button>
            <GoogleBtn />

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
