import React from 'react';
import styled from 'styled-components';

const WrapperName = styled.div`
  background-color: rgba(255, 255, 255);
  padding-top: 20px;
  padding-button: 20px;
  font-size: 30px;
  font-weight: 600;
`;

const JednaVaha = (props) => {
  //console.log(`JednaVaha: ${props}`);
  return (
    <>
      <WrapperName>{props.name}</WrapperName>
    </>
  );
};
export default JednaVaha;
