import React from 'react';
import { Chart } from 'react-charts';
import './style.css';

export const parseDateTime = (dateTimeString) => {
  const [date, time] = dateTimeString.split(' ');
  const [d, m, y] = date.split('.');
  const [hour, min] = time.split(':');
  return new Date(y, parseInt(m) - 1, d, hour, min);
};

const Graf = (props) => {
  console.log(props.data[0]);
  const dataChart = [
    {
      label: 'Váha 1',
      data: [],
    },
  ];

  const dataKNaplneni = dataChart[0].data;

  props.data.forEach((udaj) => {
    //console.log(new Date(udaj.time));
    dataKNaplneni.push({
      primary: parseDateTime(udaj.time),
      secondary: udaj[props.metric],
    });
  });

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
    <>
      <button onClick={() => props.setTimeOffset(24)}>24h</button>
      <button onClick={() => props.setTimeOffset(48)}>48h</button>
      <button onClick={() => props.setTimeOffset(24 * 7)}>7d</button>
      <button onClick={() => props.setTimeOffset(24 * 30)}>30d</button>
      <div className="graf">
        <Chart data={dataChart} axes={axes} tooltip />
      </div>
    </>
  );
};
export default Graf;
