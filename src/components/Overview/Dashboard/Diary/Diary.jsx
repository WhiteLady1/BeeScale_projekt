import React, { useState } from 'react';
import Record from './Record/Record';
import { usePersistedState } from '../../../index';
import { scaleList } from '../../../index';
import { Icon } from '@iconify/react';
import addCircleOutline from '@iconify/icons-ion/add-circle-outline';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';

import NewRecord from './NewRecord/NewRecord';

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
  /* diariesOfScale.push({
    date: '1.1.1999',
    text: 'Test 4.5.2021',
    idDate: '0000',
  }); */
  const [addRecord, setAddRecord] = useState(false);
  return (
    <>
      <div>
        Deníček
        <Icon
          icon={addCircleOutline}
          onClick={() => (addRecord ? setAddRecord(false) : setAddRecord(true))}
        />
      </div>
      {diariesOfScale.map((entry, i) =>
        entry ? <Record key={i} date={entry.date} text={entry.text} /> : null,
      )}
      {addRecord ? (
        <div>
          <div>Nový záznam</div>
          <form>
            <input></input>
            <input></input>
          </form>
          <Icon icon={checkCircleFill} />
          <div>✕</div>
        </div>
      ) : null}
    </>
  );
};
export default Diary;
