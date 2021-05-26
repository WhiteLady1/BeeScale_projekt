import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';

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
    <>
      {editRecord ? (
        <form onSubmit={handleSubmit}>
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
          <button type="submit">
            <Icon icon={checkCircleFill} />
          </button>
          <div onClick={() => setEditRecord((editRecord) => !editRecord)}>
            ✕
          </div>
        </form>
      ) : (
        <>
          <div>
            <div>{date}</div>
            <div>{text}</div>
          </div>
          <div>
            <Icon
              icon={pensilIcon}
              onClick={() => setEditRecord((editRecord) => !editRecord)}
            />
            <Icon icon={trashFill} />
          </div>
        </>
      )}
    </>
  );
};
export default Record;
