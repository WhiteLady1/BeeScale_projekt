import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

const Logo = () => {
  return (
    <>
      <Title>BeeScale</Title>
      <a href="https://www.google.com/">Přihlásit</a>
    </>
  );
};
export default Logo;
