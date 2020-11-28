import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import batteryIcon from '@iconify/icons-fa/battery';
import humidityIcon from '@iconify/icons-carbon/humidity';
import './udajeVaha.css';

const UdajeVaha = (props) => {
  const udajeVahy = props.data[0];

  const handleClick = (oneMetric) => () => {
    props.setMetric(oneMetric);
  };

  return (
    <>
      <div>Údaje pro váhu: </div>
      <div className="weight" onClick={handleClick('weight')}>
        <Icon icon={weightHanging} style={{ fontSize: '71px' }} />
        <p>Hmotnost</p>
        <p>{udajeVahy.weight}</p>
        <p>Kg</p>
      </div>
      <div className="temperature" onClick={handleClick('temperatureOut')}>
        <Icon icon={tempIcon} style={{ fontSize: '82px' }} />
        <p>Teplota </p>
        <div className="temperature-in">
          <p>in</p>
          <div className="temperature-in group">
            <p>{udajeVahy.temperatureIn}</p>
            <p>°C</p>
          </div>
        </div>
        <div className="temperature-out">
          <p>out</p>
          <div className="temperature-out group">
            <p>{udajeVahy.temperatureOut}</p>
            <p>°C</p>
          </div>
        </div>
      </div>
      <div className="humidity" onClick={handleClick('humidity')}>
        <Icon icon={humidityIcon} style={{ fontSize: '82px' }} />
        <p>Vlhkost</p>
        <p>{udajeVahy.humidity}</p>
        <p>%</p>
      </div>
      <div className="voltage" onClick={handleClick('voltage')}>
        <Icon icon={batteryIcon} style={{ fontSize: '80px' }} rotate="270deg" />
        <p>Stav baterie</p>
        <p>{udajeVahy.voltage}</p>
        <p>%</p>
      </div>
    </>
  );
};
export default UdajeVaha;
