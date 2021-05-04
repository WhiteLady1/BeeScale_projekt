import React from 'react';
import { Icon } from '@iconify/react';
import pensilIcon from '@iconify/icons-raphael/pensil';
import checkCircleFill from '@iconify/icons-bi/check-circle-fill';
import trashFill from '@iconify/icons-bi/trash-fill';
const Record = ({ date, text }) => {
  return (
    <>
      <div>
        <div>{date}</div>
        <div>{text}</div>
      </div>
      <div>
        <Icon icon={pensilIcon} />
        <Icon icon={checkCircleFill} />
        <Icon icon={trashFill} />
      </div>
    </>
  );
};
export default Record;
