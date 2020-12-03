import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { scaleList, usePersistedState } from '../../..';
import { Link } from 'react-router-dom';
const SeznamVah = (props) => {
  return <option value={props.kod}>{props.name}</option>;
};
const VyberVahu = (props) => {
  const [localStorageScaleList] = usePersistedState(scaleList, 'scaleList');
  const handleClick = (choice) => {
    props.nastavVahu(choice);
  };
  return (
    <>
      <form>
        <label>Údaje pro váhu:</label>
        <select
          value={props.vybranaVaha}
          name="vahy"
          id="vaha"
          onChange={(e) => handleClick(e.target.value)}
        >
          {localStorageScaleList.find(
            (option) => option.SigfoxID === props.vybranaVaha,
          ) ? null : (
            <option value={props.vybranaVaha}></option>
          )}
          {localStorageScaleList.map((entry) => (
            <SeznamVah
              key={entry.SigfoxID}
              kod={entry.SigfoxID}
              name={entry.name}
            />
          ))}
        </select>
      </form>
      <Link to="/settings/scales">
        <Icon icon={pensilIcon} />
      </Link>
    </>
  );
};
export default VyberVahu;
