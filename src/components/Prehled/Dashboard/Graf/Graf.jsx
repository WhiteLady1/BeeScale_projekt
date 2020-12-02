import React from 'react';
import './style.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

export const parseDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(' ');
  const [d, m, y] = date.split('.');
  const [hour, min] = time.split(':');
  return new Date(y, parseInt(m) - 1, d, hour, min);
};

const Graf = (props) => {
  console.log(props);
  return (
    <>
      <div className="btn-all">
        <button onClick={() => props.setTimeOffset(24)}>24h</button>
        <button onClick={() => props.setTimeOffset(48)}>48h</button>
        <button onClick={() => props.setTimeOffset(24 * 7)}>7d</button>
        <button onClick={() => props.setTimeOffset(24 * 30)}>30d</button>
      </div>
      <div className="graf">
        <LineChart
          width={1000}
          height={300}
          data={props.data.map((item) => ({
            ...item,
            temperatureOut: parseFloat(item.temperatureOut, 10),
          }))}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />,
          <YAxis tickCount={15} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={props.metric} stroke="#82ca9d" />
        </LineChart>
        ;
      </div>
    </>
  );
};
export default Graf;
