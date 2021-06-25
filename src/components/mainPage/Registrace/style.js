import styled from 'styled-components';

export const RegistrationPage = styled.div`
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
`;
export const Form = styled.form`
  position: relative;
  z-index: 1;
  background: rgba(237, 231, 46, 0.1);
  max-width: 360px;
  margin: 0 auto 50px;
  padding: 45px;
  text-align: center;
  border: 0.5px solid rgb(251, 255, 170);
`;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  outline: 0;
  border: 1px solid rgb(251, 255, 170);
  width: 100%;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;
export const Btn = styled.button`
  display: block;
  box-sizing: border-box;
  text-transform: uppercase;
  outline: 0;
  background: var(--btncolor);
  width: 100%;
  border: 0;
  padding: 15px;
  color: white;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover,
  :active,
  :focus {
    background: var(--maincolor);
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
`;
