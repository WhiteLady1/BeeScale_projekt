import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';
import styled from 'styled-components';

const Wrapper = styled.div``;

const WrapperHeader = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  color: rgb(56, 53, 37);
  &:hover {
    background: #f2b705;
    color: white;
  }
`;
const Weight = styled.div`
  padding-left: 5px;
`;
const WrapperBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  &:hover {
    background: #f2b705;
    color: white;
  }
`;
const Values = styled.div`
  display: flex;
  width: 35%;
  padding: 15px;
  font-size: 18px;
`;
const TemperatureIn = styled(Values)`
  border-bottom: #f7f8fa 1px solid;
  border-right: #f7f8fa 1px solid;
`;
const TemperatureOut = styled(Values)`
  border-bottom: #f7f8fa 1px solid;
  border-left: #f7f8fa 1px solid;
`;
const Humidity = styled(Values)`
  margin-top: 10px;
  border-top: #f7f8fa 1px solid;
  border-right: #f7f8fa 1px solid;
  text-align: right;
`;
const Voltage = styled(Values)`
  margin-top: 10px;
  border-top: #f7f8fa 1px solid;
  border-left: #f7f8fa 1px solid; ;
`;
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
  font-weight: 200;
  &:hover {
    background: #f2b705;
    color: white;
  }
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
          <TemperatureIn>
            <WrapperIkon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              in
            </WrapperIkon>
            <Value>{props.prehled?.temperatureIn}</Value>
            <Unite>°C</Unite>
          </TemperatureIn>
          <TemperatureOut>
            <WrapperIkon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              out
            </WrapperIkon>
            <Value>{props.prehled?.temperatureOut}</Value>
            <Unite>°C</Unite>
          </TemperatureOut>
          <Humidity>
            <Icon icon={humidityIcon} style={{ fontSize: '25px' }} />
            <Value>{props.prehled?.humidity}</Value>
            <Unite>%</Unite>
          </Humidity>
          <Voltage>
            <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
            <Value>{props.prehled?.voltage}</Value>
            <Unite>%</Unite>
          </Voltage>
        </WrapperBody>
        <LastMeasurement>
          Údaje k<br></br> {props.prehled?.time}
        </LastMeasurement>
      </Wrapper>
    </>
  );
};
export default JedenPrehled;
