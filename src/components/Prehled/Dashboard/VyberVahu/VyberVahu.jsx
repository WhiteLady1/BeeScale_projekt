import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import { scaleList, usePersistedState } from '../../..';
import { Link } from 'react-router-dom';
import SeznamVah from './SeznamVah/SeznamVah';
import { FormGroup, Label, Select } from './style';

const VyberVahu = (props) => {
  const [localStorageScaleList] = usePersistedState(scaleList, 'scaleList');
  const handleClick = (choice) => {
    props.nastavVahu(choice);
  };
  return (
    <>
      <FormGroup>
        <Label>Zobraz údaje pro váhu:</Label>
        <Select
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
        </Select>
        <Link to="/settings/scales">
          <Icon icon={pensilIcon} />
        </Link>
      </FormGroup>
    </>
  );
};
export default VyberVahu;
