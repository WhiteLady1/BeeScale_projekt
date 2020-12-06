import React from 'react';
import styled from 'styled-components';

const WrapperName = styled.div`
  margine: 0;
  background-color: rgba(255, 255, 255);
  color: rgb(56, 53, 37);
  text-align: center;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 30px;
  font-weight: 600;
  &:hover {
    background: #ffb802;
    color: white;
  }
`;

const OneScale = (props) => {
  //console.log(`OneScale: ${props}`);
  return (
    <>
      <WrapperName>{props.name}</WrapperName>
    </>
  );
};
export default OneScale;