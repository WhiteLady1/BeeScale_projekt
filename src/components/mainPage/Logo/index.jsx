import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

const Logo = () => {
  return (
    <>
      <Title>BeeScale</Title>
      <Link to="/dashboard">Přihlásit</Link>
    </>
  );
};
export default Logo;
