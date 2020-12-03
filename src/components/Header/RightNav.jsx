import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import settingsIcon from '@iconify/icons-carbon/settings';

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    text-transform: uppercase;
    margin-right: 25px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c4c4c4;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    margin: 0;
    top: 0;
    right: 0;
    height: 50vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
    }
  }
`;

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
            <Icon icon={settingsIcon} />
            Nastavení
          </Link>
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
