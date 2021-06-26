import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Burger from './Burger';
import StyledHeader from './navBarStyle';
import logo from '../logo_1.svg';

//import settingsIcon from '@iconify/icons-carbon/settings';

const NavBar = () => {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <>
      <StyledHeader>
        <div className="navbar-logo">
          <img src={logo} />
          <Link to="/">BeeScale</Link>
        </div>

        <Burger />
      </StyledHeader>
    </>
  );
};

export default NavBar;
