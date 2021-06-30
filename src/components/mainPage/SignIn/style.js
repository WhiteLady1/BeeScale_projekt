import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeUser = styled.div`
  padding-top: 50px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  @media (min-width: 600px) {
    padding-top: 100px;
  }
`;
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 50px;
  margin-bottom: 20px;
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
  //background: rgba(237, 231, 46, 0.1);
  /* background-image: linear-gradient(
    to right bottom,
    var(--secondcolor07),
    var(--secondcolor03)
  ); */
  background: var(--maincolor07);
  max-width: 360px;
  margin: 0 auto 50px;
  padding: 45px;
  text-align: center;
  border-radius: 10px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  width: 100%;
  margin: 0 0 15px;
  padding: 15px;
  outline: 0;
  border: 1px solid var(--secondcolor);
  border-radius: 5px;
`;

export const Btn = styled(Link)`
  display: block;
  box-sizing: border-box;
  text-transform: uppercase;
  outline: 0;
  background: var(--btncolor);
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: white;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;

  &:hover,
  :active,
  :focus {
    background: var(--secondcolor);
    color: var(--btncolor);
  }

  a {
    text-decoration: none;
    color: white;
  }
`;
export const OrText = styled.p`
  margin-bottom: 0;
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
