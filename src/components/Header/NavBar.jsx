import React from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
//import settingsIcon from '@iconify/icons-carbon/settings';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;

  .navbar-logo {
    padding: 15px 0;
  }
`;

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
