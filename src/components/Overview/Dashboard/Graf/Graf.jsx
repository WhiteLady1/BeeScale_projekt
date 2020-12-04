import React from 'react';
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
import { Button, Chart, TimeSelection, Wrapper } from './style';

export const parseDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(' ');
  const [d, m, y] = date.split('.');
  const [hour, min] = time.split(':');
  return new Date(y, parseInt(m) - 1, d, hour, min);
};

const Graf = (props) => {
  return (
    <>
      <Wrapper>
        <TimeSelection>
          <Button
            className="btn btn-first"
            onClick={() => props.setTimeOffset(24)}
          >
            24 h
          </Button>
          <Button
            className="btn btn-second"
            onClick={() => props.setTimeOffset(48)}
          >
            48 h
          </Button>
          <Button
            className="btn btn-third"
            onClick={() => props.setTimeOffset(24 * 7)}
          >
            7 d
          </Button>
          <Button
            className="btn btn-fourt"
            onClick={() => props.setTimeOffset(24 * 30)}
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
                  angle={30}
                  textAnchor="start"
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
          <div> nemame data :( </div>
        )}
      </Wrapper>
    </>
  );
};
export default Graf;
