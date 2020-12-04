import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ul from './rightNavstyle';

const RightNav = ({ open }) => {
  /*const location = useLocation();
  if (location.pathname === '/dashboard') {
    return null;
  }*/
  return (
    <>
      <Ul open={open}>
        <li>
          <Link className="nav nav-link" to="/prehled">
            Přehled
          </Link>
        </li>
        <li>
          <Link className="nav nav-link" to="/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="nav nav-link" to="/settings">
            Nastavení
          </Link>
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
