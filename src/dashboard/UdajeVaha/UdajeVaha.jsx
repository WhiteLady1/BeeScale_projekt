import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import energyIcon from '@iconify/icons-simple-line-icons/energy';
import humidityIcon from '@iconify/icons-carbon/humidity';

const UdajeVaha = () => {
  return (
    <>
      <div className="weight">
        <Icon icon={weightHanging} style={{ fontSize: '71px' }} />
      </div>
      <div className="temperature">
        <Icon icon={tempIcon} style={{ fontSize: '82px' }} />
      </div>
      <div className="humidity">
        <Icon icon={humidityIcon} style={{ fontSize: '82px' }} />
      </div>
      <div className="voltage">
        <Icon icon={energyIcon} style={{ fontSize: '71px' }} />
      </div>
    </>
  );
};
export default UdajeVaha;
