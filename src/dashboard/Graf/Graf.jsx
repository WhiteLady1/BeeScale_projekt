import React from 'react';
import { Chart } from 'react-charts';
import './style.css';
const data = [
  {
    label: 'Series 1',
    data: [
      {
        primary: new Date('2020-11-28T09:00:00.000Z'),
        secondary: 58,
      },
      {
        primary: new Date('2020-11-29T09:00:00.000Z'),
        secondary: 84,
      },
      {
        primary: new Date('2020-11-30T09:00:00.000Z'),
        secondary: 34,
      },
      {
        primary: new Date('2020-12-01T09:00:00.000Z'),
        secondary: 13,
      },
      {
        primary: new Date('2020-12-02T09:00:00.000Z'),
        secondary: 75,
      },
      {
        primary: new Date('2020-12-03T09:00:00.000Z'),
        secondary: 15,
      },
      {
        primary: new Date('2020-12-04T09:00:00.000Z'),
        secondary: 11,
      },
      {
        primary: new Date('2020-12-05T09:00:00.000Z'),
        secondary: 7,
      },
      {
        primary: new Date('2020-12-06T09:00:00.000Z'),
        secondary: 40,
      },
      {
        primary: new Date('2020-12-07T09:00:00.000Z'),
        secondary: 40,
      },
    ],
  },
];

const getSecondary = () => data.map((x) => x.data.secondary);

const Graf = (props) => {
  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: 'time',
        position: 'bottom',
      },
      { type: 'linear', position: 'left' },
    ],
    [],
  );
  return (
    <div className="graf">
      <Chart data={data} axes={axes} tooltip />
    </div>
  );
};
export default Graf;
