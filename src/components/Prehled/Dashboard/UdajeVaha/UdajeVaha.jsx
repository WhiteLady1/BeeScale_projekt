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
      <div className="btn weight" onClick={handleClick('weight')}>
        <Icon
          className="icon"
          icon={weightHanging}
          style={{ fontSize: '71px' }}
        />
        <p>Hmotnost</p>
        <div className="value">
          <p className="number">{udajeVahy.weight}</p>
          <p className="metric">Kg</p>
        </div>
      </div>
      <div className="btn temperature" onClick={handleClick('temperatureOut')}>
        <Icon className="icon" icon={tempIcon} style={{ fontSize: '82px' }} />
        <p>Teplota </p>
        <div className="value">
          <div className="temperature-in">
            <p>in</p>
            <div className="temperature-in group">
              <p className="number">{udajeVahy.temperatureIn || '0'}</p>
              <p className="metric">°C</p>
            </div>
          </div>
        </div>
        <div className="value">
          <div className="temperature-out">
            <p>out</p>
            <div className="temperature-out group">
              <p className="number">{udajeVahy.temperatureOut}</p>
              <p className="metric">°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn humidity" onClick={handleClick('humidity')}>
        <Icon
          className="icon"
          icon={humidityIcon}
          style={{ fontSize: '82px' }}
        />
        <p>Vlhkost</p>
        <p className="number">{udajeVahy.humidity}</p>
        <p className="metric">%</p>
      </div>
      <div className="btn voltage" onClick={handleClick('voltage')}>
        <Icon
          className="icon"
          icon={batteryIcon}
          style={{ fontSize: '80px' }}
          rotate="270deg"
        />
        <p>Stav baterie</p>
        <p className="number">{udajeVahy.voltage}</p>
        <p className="metric">%</p>
      </div>
    </>
  );
};
export default UdajeVaha;
