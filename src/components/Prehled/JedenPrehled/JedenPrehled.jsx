import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';

const JedenPrehled = (props) => {
  console.log('Jeden přehled props.prehled');
  console.log(props.prehled); //zbrazuje ověření id váhy;
  return (
    <>
      <div>
        <p>Údaje k: {props.prehled.time}</p>
        <Icon icon={weightHanging} style={{ fontSize: '20px' }} />
        <div className="hmotnost">{props.prehled.weight}</div>
        <div className="jednotka">kg</div>
      </div>
      <div className="vedlejsiPrehled">
        <div className="hodnoty">
          <Icon icon={tempIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.temperatureIn}</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.temperatureOut}</div>
          <div className="jednotka">°C</div>
        </div>
        <div className="hodnoty">
          <Icon icon={humidityIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.humidity}</div>
          <div className="jednotka">%</div>
        </div>
        <div className="baterie">
          <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
          <div className="hodnota">{props.prehled.voltage}</div>
          <div className="jednotka">kg</div>
        </div>
      </div>
    </>
  );
};
export default JedenPrehled;
