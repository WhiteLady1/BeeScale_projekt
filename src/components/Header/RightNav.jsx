import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Ul from './rightNavstyle';

const RightNav = ({ open }) => {
  /*const location = useLocation();
  if (location.pathname === '/dashboard') {
    return null;
  }*/
  //const [close, setClose] = useState(false);

  return (
    <>
      <Ul open={open}>
        <li>
          <Link
            //close={close}
            //onClick={() => setClose(!close)}
            className="nav nav-link"
            to="/prehled"
          >
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
