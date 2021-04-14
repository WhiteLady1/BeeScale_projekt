import React from 'react';
import Record from './Record/Record';
import { usePersistedState } from '../../../index';
import { scaleList } from '../../../index';

// Přidat localstorage, kde budou uloženy záznamy
const Diary = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );
  const scale = props.scale;
  console.log(scale);
  return (
    <>
      <div>Deníček</div>
      {localStorageScaleList.map((entry) => {
        return (
          <Record key={entry.SigfoxID} date={entry.name} text={entry.city} />
        );
      })}
    </>
  );
};
export default Diary;
