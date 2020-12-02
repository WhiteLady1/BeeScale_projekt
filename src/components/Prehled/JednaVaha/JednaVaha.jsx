import React from 'react';

const JednaVaha = (props) => {
  //console.log(`JednaVaha: ${props}`);
  return (
    <>
      <div className="hlavniPrehled">
        <div className="jmenoVaha">{props.name}</div>
      </div>
    </>
  );
};
export default JednaVaha;
