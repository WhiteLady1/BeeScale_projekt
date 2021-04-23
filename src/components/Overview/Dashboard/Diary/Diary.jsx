import React, { useEffect, useState } from 'react';
import Record from './Record/Record';
import { usePersistedState } from '../../../index';
import { scaleList } from '../../../index';

// Přidat localstorage, kde budou uloženy záznamy
const Diary = (props) => {
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );
  const diariesOfScale = localStorageScaleList.find(
    (scale) => scale.SigfoxID === props.scale,
  ).diary;
  console.log(diariesOfScale);
  return (
    <>
      <div>Deníček</div>
      {diariesOfScale.map((entry) =>
        entry ? (
          <Record key={entry.idDate} date={entry.date} text={entry.text} />
        ) : null,
      )}
    </>
  );
};
export default Diary;
