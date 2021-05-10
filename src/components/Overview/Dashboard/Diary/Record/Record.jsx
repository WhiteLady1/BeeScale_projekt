import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';

const Record = ({ date, text, getEditText, order }) => {
  const [editRecord, setEditRecord] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('xxx');
  };

  return (
    <>
      {editRecord ? (
        <form onSubmit={handleSubmit}>
          <input
            value={date}
            name="date"
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <input
            value={text}
            name="text"
            onChange={(e) => {
              e.preventDefault();
              const changeText = e.target.value;
            }}
          />
          <button>
            <Icon
              icon={checkCircleFill}
              onClick={() => setEditRecord((editRecord) => !editRecord)}
            />
          </button>
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
