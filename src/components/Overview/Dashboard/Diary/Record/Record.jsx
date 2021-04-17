import React from 'react';
const Record = (props) => {
  return (
    <>
      <form>
        Datum<input type="text" value={props.date}></input>
        <br></br>
        Záznam<input type="text" value={props.text}></input>
      </form>
    </>
  );
};
export default Record;
