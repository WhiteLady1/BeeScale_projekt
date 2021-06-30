import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';
import { RecordIcon, RecordIcons, RecordStyled } from './style';
import { NewRecordForm, NewRecordSubmit, NewRecordBody } from '../style';

const Record = ({
  date,
  text,
  setRecord,
  index,
  setlocalStorageScaleList,
  scaleID,
  record,
}) => {
  const [editRecord, setEditRecord] = useState(false);

  useEffect(() => {
    setRecord({ date, text });
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setlocalStorageScaleList((state) => {
      const scale = state.find((item) => {
        return item.SigfoxID === scaleID;
      });
      console.log(scale);
      const newDiary = [...scale.diary];
      console.log(newDiary);
      newDiary[index] = record;
      const newScales = { ...scale, diary: newDiary };
      console.log(newScales);
      const array = state.map((item) => {
        return item.SigfoxID === scaleID ? newScales : item;
      });
      return array;
    });
    setEditRecord((editRecord) => !editRecord);
  };
  const handleChange = (e) => {
    e.preventDefault();
    e.persist();
    setRecord((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  return (
    <RecordStyled>
      {editRecord ? (
        <NewRecordForm onSubmit={handleSubmit}>
          <NewRecordBody>
            <input
              type="date"
              defaultValue={date}
              name="date"
              onChange={handleChange}
            />
            <input
              type="text"
              defaultValue={text}
              name="text"
              onChange={handleChange}
            />
          </NewRecordBody>
          <NewRecordSubmit>
            <button type="submit">
              <Icon icon={checkCircleFill} />
            </button>
          </NewRecordSubmit>
          <RecordIcons
            onClick={() => setEditRecord((editRecord) => !editRecord)}
          >
            <RecordIcon>✕</RecordIcon>
          </RecordIcons>
        </NewRecordForm>
      ) : (
        <>
          <div>
            <div>{date}</div>
            <div>{text}</div>
          </div>
          <RecordIcons>
            <RecordIcon>
              <Icon
                icon={pensilIcon}
                onClick={() => setEditRecord((editRecord) => !editRecord)}
              />
            </RecordIcon>
            <RecordIcon>
              <Icon icon={trashFill} />
            </RecordIcon>
          </RecordIcons>
        </>
      )}
    </RecordStyled>
  );
};
export default Record;
