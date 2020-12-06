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
} from './style';

const SignIn = () => {
  return (
    <>
      <WelcomeUser>Přihlášení do BeeScale</WelcomeUser>

      <LoginPage>
        <Form>
          <Input type="text" placeholder="Uživatelské jméno" />
          <Input type="password" placeholder="Heslo" />
          <Btn>
            <Link to="/prehled">Přihlásit</Link>
          </Btn>
          <p>Nebo</p>
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
