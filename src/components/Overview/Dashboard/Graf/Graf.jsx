import React from 'react';
import './style.css';
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

export const parseDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(' ');
  const [d, m, y] = date.split('.');
  const [hour, min] = time.split(':');
  return new Date(y, parseInt(m) - 1, d, hour, min);
};

const Graf = (props) => {
  return (
    <>
      <div className="btn-all">
        <div className="btn-upper">
          <button
            className="btn btn-first"
            onClick={() => props.setTimeOffset(24)}
          >
            24h
          </button>
          <button
            className="btn btn-second"
            onClick={() => props.setTimeOffset(48)}
          >
            48h
          </button>
        </div>
        <div className="btn-lower">
          <button
            className="btn btn-third"
            onClick={() => props.setTimeOffset(24 * 7)}
          >
            7d
          </button>
          <button
            className="btn btn-fourt"
            onClick={() => props.setTimeOffset(24 * 30)}
          >
            30d
          </button>
        </div>
      </div>
      {props.data.length ? (
        <div className="graf">
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
                left: 20,
                bottom: 5,
              }}
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
          ;
        </div>
      ) : (
        <div> nemame data :( </div>
      )}
    </>
  );
};
export default Graf;
