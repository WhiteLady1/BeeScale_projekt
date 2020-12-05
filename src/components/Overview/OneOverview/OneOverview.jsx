import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import humidityIcon from '@iconify/icons-carbon/humidity';
import batteryIcon from '@iconify/icons-fa/battery';

import {
  Humidity,
  LastMeasurement,
  TemperatureIn,
  TemperatureOut,
  Unite,
  Value,
  Voltage,
  Weight,
  Wrapper,
  WrapperBody,
  WrapperHeader,
  WrapperIcon,
} from './oneOverviewStyle';

const OneOverview = (props) => {
  return (
    <>
      <Wrapper>
        <WrapperHeader>
          <Icon icon={weightHanging} style={{ fontSize: '30px' }} />
          <Weight>{props.overview?.weight}</Weight>
          <Unite>kg</Unite>
        </WrapperHeader>
        <WrapperBody>
          <TemperatureIn>
            <WrapperIcon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              in
            </WrapperIcon>
            <Value>{props.overview?.temperatureIn}</Value>
            <Unite>°C</Unite>
          </TemperatureIn>
          <TemperatureOut>
            <WrapperIcon>
              <Icon icon={tempIcon} style={{ fontSize: '25px' }} />
              out
            </WrapperIcon>
            <Value>{props.overview?.temperatureOut}</Value>
            <Unite>°C</Unite>
          </TemperatureOut>
          <Humidity>
            <Icon icon={humidityIcon} style={{ fontSize: '25px' }} />
            <Value>{props.overview?.humidity}</Value>
            <Unite>%</Unite>
          </Humidity>
          <Voltage>
            <Icon icon={batteryIcon} style={{ fontSize: '20px' }} />
            <Value>{props.overview?.voltage}</Value>
            <Unite>%</Unite>
          </Voltage>
        </WrapperBody>
        <LastMeasurement>
          Údaje k<br></br> {props.overview?.time}
        </LastMeasurement>
      </Wrapper>
    </>
  );
};
export default OneOverview;
