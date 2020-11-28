import React from 'react';
import { Chart } from 'react-charts';
import './style.css';

const Graf = (props) => {
  const dataChart = [
    {
      label: 'Series 1',
      data: [],
    },
  ];

  const dataKNaplneni = dataChart[0].data;

  props.data.forEach((udaj) => {
    console.log(new Date(udaj.time));
    dataKNaplneni.push({
      primary: new Date(udaj.time),
      secondary: udaj.weight,
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
    <div className="graf">
      <Chart data={dataChart} axes={axes} tooltip />
    </div>
  );
};
export default Graf;
