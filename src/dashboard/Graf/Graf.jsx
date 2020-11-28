import React from 'react';
import { Chart } from 'react-charts';

const data = [
  {
    label: 'Series 1',
    data: [
      {
        primary: '2020-11-28T09:00:00.000Z',
        secondary: 58,
      },
      {
        primary: '2020-11-29T09:00:00.000Z',
        secondary: 84,
      },
      {
        primary: '2020-11-30T09:00:00.000Z',
        secondary: 34,
      },
      {
        primary: '2020-12-01T09:00:00.000Z',
        secondary: 13,
      },
      {
        primary: '2020-12-02T09:00:00.000Z',
        secondary: 75,
      },
      {
        primary: '2020-12-03T09:00:00.000Z',
        secondary: 15,
      },
      {
        primary: '2020-12-04T09:00:00.000Z',
        secondary: 11,
      },
      {
        primary: '2020-12-05T09:00:00.000Z',
        secondary: 7,
      },
      {
        primary: '2020-12-06T09:00:00.000Z',
        secondary: 40,
      },
      {
        primary: '2020-12-07T09:00:00.000Z',
        secondary: 74,
      },
    ],
  },
];

const Graf = () => {
  const axes = React.useMemo(
    () => [
      {
        primary: true,
        type: 'time',
        position: 'bottom',
        // filterTicks: (ticks) =>
        //   ticks.filter((date) => +timeDay.floor(date) === +date),
      },
      { type: 'linear', position: 'left' },
    ],
    [],
  );

  return <Chart data={data} axes={axes} tooltip />;
};
export default Graf;
