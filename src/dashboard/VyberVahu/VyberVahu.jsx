import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { scales } from '../scale';

const SeznamVah = (props) => {
  return <option value={props.kod}>Vrací id váhy: {props.kod}</option>;
};

const VyberVahu = (props) => {
  console.log('VyberVahu');

  const handleClick = (choice) => {
    console.log(choice);
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
          {Object.entries(scales).map((entry) => (
            <SeznamVah key={entry[0]} kod={entry[0]} />
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
