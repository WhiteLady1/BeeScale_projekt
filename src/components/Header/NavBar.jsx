import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import StyledHeader from './navBarStyle';

//import settingsIcon from '@iconify/icons-carbon/settings';

const NavBar = () => {
  /*const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }*/

  return (
    <>
      <StyledHeader>
        <div className="navbar-logo">
          <Link to="/">BeeScale</Link>
        </div>

        <Burger />
      </StyledHeader>
    </>
  );
};

export default NavBar;
