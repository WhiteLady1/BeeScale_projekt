import React from 'react';
import { Form, Input, Label } from './style';

const SettingsUser = () => {
  return (
    <Form>
      <h3>Jméno uživatele: Tom1</h3>
      <Label>
        Změna hesla
        <Label>
          Staré heslo: <Input />
        </Label>
        <Label>
          Nové heslo: <Input />
        </Label>
        <Label>
          Ověření hesla: <Input />
        </Label>
      </Label>
      <button>Uložit heslo</button>
    </Form>
  );
};
export default SettingsUser;
