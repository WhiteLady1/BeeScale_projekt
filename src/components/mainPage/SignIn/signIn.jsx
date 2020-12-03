import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import GoogleBtn from '../../../GoogleBtn/GoogleBtn';
import styled from 'styled-components';

const WelcomeUser = styled.div`
  padding-top: 30px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const SignIn = () => {
  return (
    <>
      <WelcomeUser>
        <p>Vítejte ve webovém rozhraní Vašich BeeScale.</p>
        <p> Pro pokračování do aplikace se přihlaste.</p>
      </WelcomeUser>
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
              <Link to="/registration"> Založ si účet</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default SignIn;
