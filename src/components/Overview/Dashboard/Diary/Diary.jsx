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

  const [formState, setFormState] = useState(localStorageScaleList);
  console.log(formState);
  const diariesOfScale = localStorageScaleList.find(
    (scaleId) => scaleId.SigfoxID === props.scale,
  ).diary;

  const [addRecord, setAddRecord] = useState(false);
  const [newRecord, setNewRecord] = useState(newEmptyRecord);

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
              setlocalStorageScaleList(formState);
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
            {/*Pro zavření nového záznamu, smaže co se vepsalo*/}
            <div
              onClick={() => {
                const record = { ...newRecord };
                record.text = '';
                record.date = '';
                setNewRecord(record);
                setAddRecord((addRecord) => !addRecord);
              }}
            >
              ✕
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
};
export default Diary;
