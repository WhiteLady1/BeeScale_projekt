import React from 'react';
import { Icon } from '@iconify/react';
import weightHanging from '@iconify/icons-fa-solid/weight-hanging';
import tempIcon from '@iconify/icons-raphael/temp';
import batteryIcon from '@iconify/icons-fa/battery';
import humidityIcon from '@iconify/icons-carbon/humidity';
import {
  Time,
  Values,
  Value,
  Wrapper,
  WrapperIcon,
  Unite,
  WrapperValue,
  TemIn,
  TemOut,
  WrapperTem,
} from './style';

const DataOfScale = (props) => {
  const ScalesData = props.data[props.data.length - 1];

  const handleClick = (oneMetric) => () => {
    props.setMetric(oneMetric);
  };

  return (
    <>
      <Wrapper>
        <Values className="btn weight" onClick={handleClick('weight')}>
          <WrapperIcon>
            <Icon
              className="icon"
              icon={weightHanging}
              style={{ fontSize: '50px' }}
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.weight}</Value>
            <Unite className="metric">Kg</Unite>
          </WrapperValue>
        </Values>
        <Values
          className="btn temperature"
          onClick={handleClick('temperatureOut')}
        >
          <WrapperTem>
            <TemIn>
              <WrapperIcon>
                <Icon
                  className="icon"
                  icon={tempIcon}
                  style={{ fontSize: '50px' }}
                />
                <p>in</p>
              </WrapperIcon>
              <WrapperValue>
                <Value className="number">
                  {ScalesData.temperatureIn || '0'}
                </Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemIn>
            <TemOut>
              <WrapperIcon>
                <Icon
                  className="icon"
                  icon={tempIcon}
                  style={{ fontSize: '50px' }}
                />
                <p>out</p>
              </WrapperIcon>
              <WrapperValue>
                <Value className="number">{ScalesData.temperatureOut}</Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemOut>
          </WrapperTem>
        </Values>
        <Values className="btn humidity" onClick={handleClick('humidity')}>
          <WrapperIcon>
            <Icon
              className="icon"
              icon={humidityIcon}
              style={{ fontSize: '50px' }}
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.humidity}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
        <Values className="btn voltage" onClick={handleClick('voltage')}>
          <WrapperIcon>
            <Icon
              className="icon"
              icon={batteryIcon}
              style={{ paddingLeft: '10px', fontSize: '50px' }}
              rotate="270deg"
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.voltage}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
      </Wrapper>
      <Time>Zobrazená data z: {ScalesData.time}</Time>
    </>
  );
};
export default DataOfScale;
