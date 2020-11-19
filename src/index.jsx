import React from 'react';
import { render } from 'react-dom';
import Logo from './mainPage/Logo';
import './index.html';

const App = () => {
  return (
    <>
      <Logo />
    </>
  );
};

render(<App />, document.querySelector('#app'));
