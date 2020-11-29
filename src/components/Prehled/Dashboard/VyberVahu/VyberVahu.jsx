import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';
import pensilIcon from '@iconify/icons-raphael/pensil';

const SeznamVah = (props) => {
  return <option value={props.kod}>Vrací id váhy: {props.kod}</option>;
};

const VyberVahu = (props) => {
  const handleClick = (choice) => {
    props.nastavVahu(choice);
  };

  return (
    <>
      <form>
        <label>Vyber váhu pro zobrazení: </label>
        <select
          value={props.vybranaVaha}
          name="vahy"
          id="vaha"
          onChange={(e) => handleClick(e.target.value)}
        >
          {props.vahyOptions.find(
            (option) => option === props.vybranaVaha,
          ) ? null : (
            <option value={props.vybranaVaha}>
              Vrací id váhy: {props.vybranaVaha}
            </option>
          )}
          {props.vahyOptions.map((entry) => (
            <SeznamVah key={entry} kod={entry} />
          ))}
        </select>
      </form>
      <div>Vybraná váha je: {props.vybranaVaha}</div>
      <a href="index.html">
        <Icon icon={settingsIcon} />
      </a>
      <Icon icon={pensilIcon} />
    </>
  );
};
export default VyberVahu;
