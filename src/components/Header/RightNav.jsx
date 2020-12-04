import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    text-transform: uppercase;
    margin-right: 25px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffb802;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    margin: 0;
    top: 0;
    right: 0;
    height: 30vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      color: black;
      margin-top: 10px;
    }

    li:first-child {
      padding-top: 30px;
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
            Nastavení
          </Link>
        </li>
      </Ul>
    </>
  );
};

export default RightNav;
