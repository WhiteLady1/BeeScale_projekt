import React from 'react';
const Record = ({ date, text }) => {
  return (
    <>
      <div>{date}</div>
      <div>{text}</div>
    </>
  );
};
export default Record;
