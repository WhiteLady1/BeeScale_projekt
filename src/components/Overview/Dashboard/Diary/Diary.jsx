import React, { useEffect, useState } from 'react';
import Record from './Record/Record';
import { usePersistedState } from '../../../index';
import { scaleList, newEmptyRecord } from '../../../index';
import { Icon } from '@iconify/react';
import addCircleOutline from '@iconify/icons-ion/add-circle-outline';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';

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
  const [newRecord, setNewRecord] = useState({
    date: '',
    text: '',
    idDate: '',
  });

  return (
    <>
      <div>
        Deníček
        <Icon
          icon={addCircleOutline}
          onClick={() => setAddRecord((addRecord) => !addRecord)}
        />
      </div>
      {diariesOfScale.map((entry, i) =>
        entry ? <Record key={i} date={entry.date} text={entry.text} /> : null,
      )}
      {addRecord ? (
        <div>
          <div>Nový záznam</div>
          <form
            onSubmit={() => {
              diariesOfScale.push(newRecord);
              setAddRecord((addRecord) => !addRecord);
            }}
          >
            <input
              type="date"
              onChange={(e) => {
                e.preventDefault();
                const record = { ...newRecord };
                record.date = e.target.value;
                setNewRecord(record);
              }}
            />
            <input
              type="text"
              onChange={(e) => {
                e.preventDefault();
                const record = { ...newRecord };
                record.text = e.target.value;
                setNewRecord(record);
              }}
            />
            <button type="submit">
              <Icon icon={checkCircleFill} />
            </button>
            <div>✕</div>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default Diary;
