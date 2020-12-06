import styled from 'styled-components';

export const RegistrationPage = styled.div`
width: 360px;
padding: 8% 0 0;
margin: auto;
`;
export const Form = styled.form`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  `;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
export const Btn = styled.button`
font-family: 'Roboto', sans-serif;
text-transform: uppercase;
outline: 0;
background: #ffb802;
width: 100%;
border: 0;
padding: 15px;
color: #ffffff;
font-size: 14px;
-webkit-transition: all 0.3 ease;
transition: all 0.3 ease;
cursor: pointer;

&:hover,
:active,
:focus {
  background: #ffb802;
  opacity: 0.7;
}

a {
  text-decoration: none;
  color: #000000;
}
`;

export const Message = styled.p`
margin: 15px 0 0;
color: #b3b3b3;
font-size: 12px;

a {
  color: black;
  text-decoration: none;
}
`
