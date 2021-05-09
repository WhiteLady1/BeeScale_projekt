import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';

const Record = ({ date, text, getEditText, order }) => {
  const [editRecord, setEditRecord] = useState(false);
  return (
    <>
      {editRecord ? (
        <form>
          <input
            value={date}
            onChange={(e) => {
              e.preventDefault();
            }}
          />
          <input
            value={text}
            onChange={(e) => {
              e.preventDefault();
              const changeText = e.target.value;
              getEditText(changeText, order);
            }}
          />
          <Icon
            icon={checkCircleFill}
            onClick={() => setEditRecord((editRecord) => !editRecord)}
          />
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
