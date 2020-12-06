import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Ul, { ListItem } from './rightNavstyle';

const RightNav = (props) => {
  const location = useLocation();
  const pathName = location.pathname;
  const history = useHistory();
  const handleClick = (locationTo) => {
    props.setOpen(false);
    history.push(locationTo);
  };

  return (
    <>
      <Ul open={props.open}>
        <li>
          <ListItem
            selected={pathName === '/prehled'}
            onClick={() => handleClick('/prehled')}
          >
            Přehled
          </ListItem>
        </li>
        <li>
          <ListItem
            selected={pathName === '/dashboard'}
            onClick={() => handleClick('/dashboard')}
          >
            Dastboard
          </ListItem>
        </li>
        <li>
          <ListItem
            selected={pathName === '/settings'}
            onClick={() => handleClick('/settings')}
          >
            Nastavení
          </ListItem>
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
