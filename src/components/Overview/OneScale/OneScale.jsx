import React from 'react';
import { WrapperName } from './style';

const OneScale = (props) => {
  //console.log(`OneScale: ${props}`);
  return (
    <>
      <WrapperName>{props.name}</WrapperName>
    </>
  );
};
export default OneScale;
