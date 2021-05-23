import React, { useState } from 'react';
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
    (scaleId) => scaleId.SigfoxID === props.scale,
  ).diary;

  const [addRecord, setAddRecord] = useState(false);
  const [newRecord, setNewRecord] = useState(newEmptyRecord);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlocalStorageScaleList((state) => {
      const array = state.map((item) => {
        return item.SigfoxID === props.scale
          ? { ...item, diary: [...diariesOfScale, newRecord] }
          : item;
      });
      return array;
    });
    setAddRecord((addRecord) => !addRecord);
  };

  /*funkce pro změnu hodnoty. Nastavuji nový záznam, což znamená že vytvářím nový objekt složený z newRecord, kde ve vlastnosti obsažení v name měním hodnotu dle vstupu z fomáře dle name (např. name='date', tudíž upravuju vlastnost date*/
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewRecord({ ...newRecord, [e.target.name]: value });
  };

  const listOfDiaries = [...diariesOfScale];
  const [editRecord, setEditRecord] = useState(['']);
  const onChangeRecord = (entry) => {
    setEditRecord(entry);
  };
  console.log(editRecord);
  const onSaveEditRecord = (e) => {};

  return (
    <>
      <div>
        Deníček
        <Icon
          icon={addCircleOutline}
          onClick={() => setAddRecord((addRecord) => !addRecord)}
        />
      </div>
      {listOfDiaries.map((entry, i) =>
        entry ? (
          <Record
            key={i}
            date={entry.date}
            text={entry.text}
            handleChangeRecord={onChangeRecord}
          />
        ) : null,
      )}
      {addRecord ? (
        <div>
          <div>Nový záznam</div>
          <form onSubmit={handleSubmit}>
            <input type="date" name="date" onChange={handleChange} />
            <input type="text" name="text" onChange={handleChange} />
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
