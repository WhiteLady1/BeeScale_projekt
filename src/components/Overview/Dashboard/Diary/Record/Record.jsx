import React from 'react';
const Record = (props) => {
  return (
    <>
      <form>
        Datum<input type="text">{props.date}</input>
        <br></br>
        Záznam<input type="text">{props.text}</input>
      </form>
    </>
  );
};
export default Record;
