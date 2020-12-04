import React, { useState } from 'react';
import StyledBurger from './burgerStyle';
import RightNav from './RightNav';

const Burger = () => {
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState(true);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
