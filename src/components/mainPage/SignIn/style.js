import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeUser = styled.div`
  padding-top: 100px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
`;

export const LogInGoogle = styled.div`
  padding-top: 15px;
  font-size: 14px;
`;

export const LoginPage = styled.div`
  width: 360px;
  margin: auto;
`;

export const Form = styled.form`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 50px;
  padding: 45px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
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

export const Btn = styled(Link)`
  display: block;
  box-sizing: border-box;
  text-transform: uppercase;
  outline: 0;
  background: black;
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
    background: #ffb802;
  }

  a {
    text-decoration: none;
    color: white;
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
