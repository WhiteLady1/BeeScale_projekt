import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ul from './rightNavstyle';

const RightNav = (props) => {
  /*const location = useLocation();
  if (location.pathname === '/dashboard') {
    return null;
  }*/
  const [openX, setOpenX] = useState(props.open);
  console.log(openX);

  return (
    <>
      <Ul open={props.open} onClick={() => setOpenX(!openX)}>
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
