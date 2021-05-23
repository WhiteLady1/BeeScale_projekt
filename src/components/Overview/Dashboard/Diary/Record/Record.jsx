import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';

const Record = ({ date, text, handleChangeRecord }) => {
  const [editRecord, setEditRecord] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('xxx');
  };
  const handleChange = (e) => {
    e.preventDefault();
    const value = { [e.target.name]: e.target.value };
    handleChangeRecord(value);
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
            <Icon
              icon={checkCircleFill}
              onClick={() => setEditRecord((editRecord) => !editRecord)}
            />
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
