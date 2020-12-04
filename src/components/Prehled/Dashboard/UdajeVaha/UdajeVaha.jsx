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
  WrapperIkon,
  Unite,
  WrapperValue,
  TemIn,
  TemOut,
  WrapperTem,
} from './style';

const UdajeVaha = (props) => {
  const udajeVahy = props.data[props.data.length - 1];

  const handleClick = (oneMetric) => () => {
    props.setMetric(oneMetric);
  };

  return (
    <>
      <Wrapper>
        <Values className="btn weight" onClick={handleClick('weight')}>
          <WrapperIkon>
            <Icon
              className="icon"
              icon={weightHanging}
              style={{ fontSize: '50px' }}
            />
          </WrapperIkon>
          <WrapperValue>
            <Value className="number">{udajeVahy.weight}</Value>
            <Unite className="metric">Kg</Unite>
          </WrapperValue>
        </Values>
        <Values
          className="btn temperature"
          onClick={handleClick('temperatureOut')}
        >
          <WrapperTem>
            <TemIn>
              <WrapperIkon>
                <Icon
                  className="icon"
                  icon={tempIcon}
                  style={{ fontSize: '50px' }}
                />
                <p>in</p>
              </WrapperIkon>
              <WrapperValue>
                <Value className="number">
                  {udajeVahy.temperatureIn || '0'}
                </Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemIn>
            <TemOut>
              <WrapperIkon>
                <Icon
                  className="icon"
                  icon={tempIcon}
                  style={{ fontSize: '50px' }}
                />
                <p>out</p>
              </WrapperIkon>
              <WrapperValue>
                <Value className="number">{udajeVahy.temperatureOut}</Value>
                <Unite className="metric">°C</Unite>
              </WrapperValue>
            </TemOut>
          </WrapperTem>
        </Values>
        <Values className="btn humidity" onClick={handleClick('humidity')}>
          <WrapperIkon>
            <Icon
              className="icon"
              icon={humidityIcon}
              style={{ fontSize: '50px' }}
            />
          </WrapperIkon>
          <WrapperValue>
            <Value className="number">{udajeVahy.humidity}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
        <Values className="btn voltage" onClick={handleClick('voltage')}>
          <WrapperIkon>
            <Icon
              className="icon"
              icon={batteryIcon}
              style={{ paddingLeft: '10px', fontSize: '50px' }}
              rotate="270deg"
            />
          </WrapperIkon>
          <WrapperValue>
            <Value className="number">{udajeVahy.voltage}</Value>
            <Unite className="metric">%</Unite>
          </WrapperValue>
        </Values>
      </Wrapper>
      <Time>Zobrazená data z: {udajeVahy.time}</Time>
    </>
  );
};
export default UdajeVaha;
