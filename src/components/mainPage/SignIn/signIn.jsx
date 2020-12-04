import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GoogleBtn from '../../../GoogleBtn/GoogleBtn';
import styled from 'styled-components';

const WelcomeUser = styled.div`
  padding-top: 100px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;

const LogInGoogle = styled.div`
  padding-top: 15px;
  font-size: 14px;
`;

const SignIn = () => {
  return (
    <>
      <WelcomeUser>Přihlášení do BeeScale</WelcomeUser>
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="Uživatelské jméno" />
            <input type="password" placeholder="Heslo" />
            <button>
              <Link to="/prehled">Přihlásit</Link>
            </button>
            <p>Nebo</p>
            <LogInGoogle>
              <GoogleBtn />
            </LogInGoogle>
            <p className="message">
              Ještě nejsi registrovaný?
              <Link to="/registration"> Založ si účet</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
