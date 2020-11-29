import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Registration = () => {
  return (
    <>
      <div className="registration-page">
        <div className="form">
          <form className="register-form">
            <div className="register-name">
              <input type="text" placeholder="name" />
              <input type="text" placeholder="surname" />
            </div>
            <input type="password" placeholder="password" />
            <input type="text" placeholder="email address" />
            <button>Založ</button>
            <p className="message">
              Už jsi prošel registrací? <Link to="/">Přihlaš se</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Registration;
