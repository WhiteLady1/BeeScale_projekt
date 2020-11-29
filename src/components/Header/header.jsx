import React from 'react';
import { Link, useLocation } from 'react-router-dom';
//import Logo from '../mainPage/Logo';
import './style.css';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';

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
            <Link className="nav" to="/prehled">
              Přehled
            </Link>
          </li>
          <li>
            <Link className="nav" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="nav" to="/settings">
              <Icon icon={settingsIcon} />
              Nastavení
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
