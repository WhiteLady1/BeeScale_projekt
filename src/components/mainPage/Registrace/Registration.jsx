import React from 'react';
import { Link } from 'react-router-dom';
import { Form, RegistrationPage, Input, Btn, Message } from './style';

const Registration = () => {
  return (
    <>
      <RegistrationPage>
        <Form>
          <div className="register-name">
            <Input type="text" placeholder="jméno" />
            <Input type="text" placeholder="příjmení" />
          </div>
          <Input type="password" placeholder="heslo" />
          <Input type="text" placeholder="email" />
          <Btn>Založ si účet</Btn>
          <Message>
            Už jsi prošel registrací? <Link to="/">Přihlaš se</Link>
          </Message>
        </Form>
      </RegistrationPage>
    </>
  );
};
export default Registration;
