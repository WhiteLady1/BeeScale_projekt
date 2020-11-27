import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { scale as scaleList } from '../scale';

const SeznamVah = (props) => {
  return <option value={props.kod}>Vrací id váhy: {props.kod}</option>;
};

const VyberVahu = (props) => {
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
          {scaleList.map((scaleItem) => (
            <SeznamVah key={scaleItem.de6ce} kod={scaleItem.de6ce} />
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
