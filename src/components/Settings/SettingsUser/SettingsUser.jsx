import React from 'react';

const SettingsUser = () => {
  return (
    <div>
      <h3>Jméno uživatele</h3>
      <form>
        <h4>Změna hesla</h4>
        <label>
          Staré heslo: <input />
        </label>
        <div className="checkPassword">
          <label>
            Nové heslo: <input />
          </label>
          <label>
            Ověření hesla: <input />
          </label>
        </div>
        <button>Uložit heslo</button>
      </form>
    </div>
  );
};
export default SettingsUser;
