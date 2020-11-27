import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import settingsIcon from '@iconify/icons-carbon/settings';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { useState } from 'react';
import { scale } from '../scale';

const SeznamVah = (props) => {
  return <option>Vrací id váhy: {props.kod}</option>;
};

const VyberVahu = (props) => {
  const [vybranaVaha, setVybranaVaha] = useState(`${scale[0].de6ce}`);

  const handleClick = (choice) => {
    console.log(choice);
    setVybranaVaha(choice);
    props.nastavVahu(vybranaVaha);
  };

  return (
    <>
      <form>
        <label>Vyber váhu pro zobrazení: </label>
        <select
          name="vahy"
          id="vaha"
          onChange={(e) => handleClick(e.target.value)}
        >
          {scale.map((scale) => (
            <SeznamVah kod={scale.de6ce} />
          ))}
        </select>
      </form>
      <div>Vybraná váha je: {vybranaVaha}</div>
      <a href="index.html">
        <Icon icon={settingsIcon} />
      </a>
      <Icon icon={pensilIcon} />
    </>
  );
};
export default VyberVahu;
