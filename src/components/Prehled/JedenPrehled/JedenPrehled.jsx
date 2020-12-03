import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';
import styled from 'styled-components';

const Wrapper = styled.div`
  margine: 0;
  padding: 0;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  width: 300px;
`;

const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;
const WrapperBody = styled.div`
  display: flex;
  width:50%
  padding: 5px;
`;
const Values = styled.div`
  display: flex;
`;
const Unite = styled.div``;

const JedenPrehled = (props) => {
  console.log('Jeden přehled props.prehled');
  console.log(props.prehled); //zbrazuje ověření id váhy;
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <Icon icon={weightHanging} style={{ fontSize: '20px' }} />
          <div className="hmotnost">{props.prehled?.weight}</div>
          <Unite>kg</Unite>
        </WrapperHeader>
        <WrapperBody>
          <Values>
            <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
            <p>in</p>
            <div className="hodnota">{props.prehled?.temperatureIn}</div>
            <Unite>°C</Unite>
          </Values>
          <Values>
            <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
            <p>out</p>
            <div className="hodnota">{props.prehled?.temperatureOut}</div>
            <Unite>°C</Unite>
          </Values>
          <Values>
            <Icon icon={humidityIcon} style={{ fontSize: '25px' }} />
            <div className="hodnota">{props.prehled?.humidity}</div>
            <Unite>%</Unite>
          </Values>
          <Values>
            <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
            <div className="hodnota">{props.prehled?.voltage}</div>
            <Unite>%</Unite>
          </Values>
        </WrapperBody>
        Údaje k: {props.prehled?.time}
      </Wrapper>
    </>
  );
};
export default JedenPrehled;
