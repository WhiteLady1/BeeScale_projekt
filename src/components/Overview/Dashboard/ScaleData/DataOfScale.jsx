import React, { useState } from 'react';
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
  SpecialValues,
} from './style';

const DataOfScale = (props) => {
  const ScalesData = props.data[props.data.length - 1];

  const [selected, setSelected] = useState('weight');

  const handleClick = (oneMetric) => () => {
    props.setMetric(oneMetric);
    setSelected('');
    switch (oneMetric) {
      case 'weight':
        setSelected('weight');
        break;
      case 'temperatureOut':
        setSelected('temperatureOut');
        break;
      case 'humidity':
        setSelected('humidity');
        break;
      case 'voltage':
        setSelected('voltage');
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <SpecialValues
          className="btn weight"
          onClick={handleClick('weight')}
          selected={selected === 'weight' ? true : false}
        >
          <WrapperIcon>
            <Icon
              className="icon"
              icon={weightHanging}
              style={{ fontSize: '40px' }}
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.weight || '0'}</Value>
            <Unite className="metric">Kg</Unite>
          </WrapperValue>
        </SpecialValues>
        <SpecialValues
          className="btn temperature"
          onClick={handleClick('temperatureOut')}
          selected={selected === 'temperatureOut' ? true : false}
        >
          <WrapperIcon>
            <Icon
              className="icon"
              icon={tempIcon}
              style={{ fontSize: '40px' }}
            />
          </WrapperIcon>
          <WrapperTem>
            <TemIn>
              <p>in</p>
              <WrapperValue>
                <Value className="number">
                  {ScalesData.temperatureIn || '0'}
                </Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemIn>
            <TemOut>
              <WrapperIcon>
                {/*<Icon
                  className="icon"
                  icon={tempIcon}
                  style={{ fontSize: '40px' }}
                />*/}
                <p>out</p>
              </WrapperIcon>
              <WrapperValue>
                <Value className="number">
                  {ScalesData.temperatureOut || '0'}
                </Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemOut>
          </WrapperTem>
        </SpecialValues>
        <Values
          className="btn humidity"
          onClick={handleClick('humidity')}
          selected={selected === 'humidity' ? true : false}
        >
          <WrapperIcon>
            <Icon
              className="icon"
              icon={humidityIcon}
              style={{ fontSize: '40px' }}
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.humidity || '0'}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
        <Values
          className="btn voltage"
          onClick={handleClick('voltage')}
          selected={selected === 'voltage' ? true : false}
        >
          <WrapperIcon>
            <Icon
              className="icon"
              icon={batteryIcon}
              style={{ paddingLeft: '10px', fontSize: '40px' }}
              rotate="270deg"
            />
          </WrapperIcon>
          <WrapperValue>
            <Value className="number">{ScalesData.voltage || '0'}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
      </Wrapper>
      <Time>Zobrazená data z: {ScalesData.time}</Time>
    </>
  );
};
export default DataOfScale;
