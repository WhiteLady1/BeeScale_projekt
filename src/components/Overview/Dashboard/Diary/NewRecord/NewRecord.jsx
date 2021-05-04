import React, { useState } from 'react';
import { usePersistedState } from '../../../../index';
import { scaleList, newEmptyRecord } from '../../../../index';
import { Icon } from '@iconify/react';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';

const NewRecord = (scaleID) => {
  const [saveRecord, setSaveRecord] = useState(false);
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );

  const [formState, setFormState] = useState(localStorageScaleList);
  console.log(scaleID);
  return (
    <>
      <div>Nový záznam</div>
      <form>
        <input></input>
        <input></input>
      </form>
      <Icon icon={checkCircleFill} />
      <div>✕</div>
    </>
  );
};
export default NewRecord;
