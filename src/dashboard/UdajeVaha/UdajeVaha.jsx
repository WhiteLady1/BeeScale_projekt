import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import energyIcon from '@iconify/icons-simple-line-icons/energy';
import humidityIcon from '@iconify/icons-carbon/humidity';
import './udajeVaha.css';
import { scale } from '../scale';

const UdajeVaha = (props) => {
  console.log(props.vaha);

  return (
    <>
      <div>Údaje pro váhu: {props.vaha}</div>
      <div className="weight">
        <Icon icon={weightHanging} style={{ fontSize: '71px' }} />
        <p>Hmotnost</p>
        <p>{scale[0].weight}</p>
        <p>Kg</p>
      </div>
      <div className="temperature">
        <Icon icon={tempIcon} style={{ fontSize: '82px' }} />
        <p>Teplota </p>
        <div className="temperature-in">
          <p>in</p>
          <div className="temperature-in group">
            <p>25</p>
            <p>°C</p>
          </div>
        </div>
        <div className="temperature-out">
          <p>out</p>
          <div className="temperature-out group">
            <p>-2</p>
            <p>°C</p>
          </div>
        </div>
      </div>
      <div className="humidity">
        <Icon icon={humidityIcon} style={{ fontSize: '82px' }} />
        <p>Vlhkost</p>
        <p>40</p>
        <p>%</p>
      </div>
      <div className="voltage">
        <Icon icon={energyIcon} style={{ fontSize: '71px' }} />
        <p>Stav baterie</p>
        <p>100</p>
        <p>%</p>
      </div>
    </>
  );
};
export default UdajeVaha;