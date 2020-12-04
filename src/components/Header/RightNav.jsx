import React from 'react';
import { Link } from 'react-router-dom';
import Ul from './rightNavstyle';

const RightNav = ({ open }) => {
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
