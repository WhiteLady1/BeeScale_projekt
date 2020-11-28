import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }
  return (
    <>
      <header>
        <div className="logo">
          <h1>
            <Link className="nav" to="/">
              BeeScale
            </Link>
          </h1>
        </div>
        <ul>
          <li>
            <Link className="nav" to="/settings">
              Nastavení
            </Link>
          </li>
          <li>
            <Link className="nav" to="/dashboard">
              Kontakt
            </Link>
          </li>
          <li>
            <Link className="nav" to="">
              E-shop
            </Link>
          </li>
          <li className="close">X</li>
        </ul>

        <div className="menu">Menu</div>
      </header>
    </>
  );
};

export default NavBar;
