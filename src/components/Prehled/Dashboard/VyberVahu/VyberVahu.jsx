import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { scaleList, usePersistedState } from '../../..';
import { Link } from 'react-router-dom';

const SeznamVah = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );

  const name = localStorageScaleList.find(
    (scale) => scale.SigfoxID === props.kod,
  ).name;
  return <option value={props.kod}>{name}</option>;
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
          {props.vahyOptions.find(
            (option) => option === props.vybranaVaha,
          ) ? null : (
            <option value={props.vybranaVaha}></option>
          )}
          {props.vahyOptions.map((entry) => (
            <SeznamVah key={entry} kod={entry} />
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
