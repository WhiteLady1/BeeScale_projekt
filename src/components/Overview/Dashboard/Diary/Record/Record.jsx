import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';
import { RecordIcon, RecordIcons, RecordStyled } from './style';

const Record = ({ date, text }) => {
  const [editRecord, setEditRecord] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('xxx');
  };

  return (
    <RecordStyled>
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
            <RecordIcon>
              <Icon
                icon={checkCircleFill}
                onClick={() => setEditRecord((editRecord) => !editRecord)}
              />
            </RecordIcon>
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
