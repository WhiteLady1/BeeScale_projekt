import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Registration = () => {
  return (
    <>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="name" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Už jsi registrovaný? <Link to="/">Přihlaš se</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;
