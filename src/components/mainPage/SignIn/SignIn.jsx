import React from 'react';
import { Link } from 'react-router-dom';
import GoogleBtn from '../../../GoogleBtn/GoogleBtn';
import {
  WelcomeUser,
  LogInGoogle,
  LoginPage,
  Form,
  Input,
  Btn,
  Message,
  Logo,
  OrText,
} from './style';
import logo from '../../logo_1.svg';

const SignIn = () => {
  return (
    <>
      <WelcomeUser>
        <Logo>
          <img width="70px" src={logo}></img>
          <div>
            BEE<b>SCALE</b>
          </div>
        </Logo>
      </WelcomeUser>

      <LoginPage>
        <Form>
          <Input type="text" placeholder="Uživatelské jméno" />
          <Input type="password" placeholder="Heslo" />
          <Btn to="/prehled">Přihlásit</Btn>
          <OrText>Nebo</OrText>
          <LogInGoogle>
            <GoogleBtn />
          </LogInGoogle>
          <Message>
            Ještě nejsi registrovaný?
            <Link to="/registration"> Založ si účet</Link>
          </Message>
        </Form>
      </LoginPage>
    </>
  );
};
export default SignIn;
