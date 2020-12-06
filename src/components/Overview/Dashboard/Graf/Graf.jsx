import React, { useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Icon, InlineIcon } from '@iconify/react';
import beehiveOffOutline from '@iconify/icons-mdi/beehive-off-outline';
import { Button, Chart, NoData, TimeSelection, Wrapper } from './style';

export const parseDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(' ');
  const [d, m, y] = date.split('.');
  const [hour, min] = time.split(':');
  return new Date(y, parseInt(m) - 1, d, hour, min);
};

const Graf = (props) => {
  const [selected, setSelected] = useState('');
  const handleClick = (time) => {
    props.setTimeOffset(time);
    setSelected('');
    switch (time) {
      case 24:
        setSelected(24);
        break;
      case 48:
        setSelected(48);
        break;
      case 24 * 7:
        setSelected(24 * 7);
        break;
      case 24 * 30:
        setSelected(24 * 30);
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <TimeSelection>
          <Button
            className="btn btn-first"
            onClick={() => handleClick(24)}
            selected={selected === 24 ? true : false}
          >
            24 h
          </Button>
          <Button
            className="btn btn-second"
            onClick={() => handleClick(48)}
            selected={selected === 48 ? true : false}
          >
            48 h
          </Button>
          <Button
            className="btn btn-third"
            onClick={() => handleClick(24 * 7)}
            selected={selected === 24 * 7 ? true : false}
          >
            7 d
          </Button>
          <Button
            className="btn btn-fourt"
            onClick={() => handleClick(24 * 30)}
            selected={selected === 24 * 30 ? true : false}
          >
            30 d
          </Button>
        </TimeSelection>
        {props.data.length ? (
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                //width={1000}
                //height={300}
                data={props.data.map((item) => ({
                  ...item,
                  temperatureOut: parseFloat(item.temperatureOut, 10),
                }))}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 5,
                }}
                padding={{ bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="time"
                  tickCount={10}
                  style={{ fontSize: '12px' }}
                />
                ,
                <YAxis tickCount={15} />
                <Tooltip />
                <Line type="monotone" dataKey={props.metric} stroke="#ffb802" />
                <Legend verticalAlign="top" />
              </LineChart>
            </ResponsiveContainer>
          </Chart>
        ) : (
          <div>
            {' '}
            <NoData>
              <p>Nemáme data :(</p>
              <Icon icon={beehiveOffOutline} style={{ fontSize: '80px' }} />
            </NoData>
          </div>
        )}
      </Wrapper>
    </>
  );
};
export default Graf;
