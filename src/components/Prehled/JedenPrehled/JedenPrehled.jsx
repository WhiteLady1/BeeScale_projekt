import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';
import styled from 'styled-components';

const Wrapper = styled.div`
  margine: 0;
  padding: 5px;
  background-color: rgba(255, 255, 255);
  text-align: center;
  width: 300px;
`;

const WrapperHeader = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
`;
const Weight = styled.div`
  padding-left: 5px;
`;
const WrapperBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: rgb(231, 234, 241, 0.849) 0.5px solid;
`;
const Values = styled.div`
  display: flex;
  width: 35%;
  padding: 15px;
  font-size: 18px;
`;
const TemperatureIn = styled(Values)``;
const WrapperIkon = styled.div`
  display: flex;
  align-items: center;
`;
const Value = styled.div`
  padding: 0;
  padding-left: 5px;
`;
const Unite = styled.div`
  padding-left: 1px;
`;
const LastMeasurement = styled.div`
  font-size: 15px;
  padding: 15px;
`;

const JedenPrehled = (props) => {
  console.log('Jeden přehled props.prehled');
  console.log(props.prehled); //zbrazuje ověření id váhy;
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <Icon icon={weightHanging} style={{ fontSize: '30px' }} />
          <Weight>{props.prehled?.weight}</Weight>
          <Unite>kg</Unite>
        </WrapperHeader>
        <WrapperBody>
          <Values>
            <WrapperIkon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              in
            </WrapperIkon>
            <Value>{props.prehled?.temperatureIn}</Value>
            <Unite>°C</Unite>
          </Values>
          <Values>
            <WrapperIkon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              out
            </WrapperIkon>
            <Value>{props.prehled?.temperatureOut}</Value>
            <Unite>°C</Unite>
          </Values>
          <Values>
            <Icon icon={humidityIcon} style={{ fontSize: '25px' }} />
            <Value>{props.prehled?.humidity}</Value>
            <Unite>%</Unite>
          </Values>
          <Values>
            <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
            <Value>{props.prehled?.voltage}</Value>
            <Unite>%</Unite>
          </Values>
        </WrapperBody>
        <LastMeasurement>
          Údaje k<br></br> {props.prehled?.time}
        </LastMeasurement>
      </Wrapper>
    </>
  );
};
export default JedenPrehled;
