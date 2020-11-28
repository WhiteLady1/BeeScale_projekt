import React, { useState } from 'react';
import subHours from 'date-fns/subHours';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf, { parseDateTime } from './Graf/Graf';
import Alert from './Alert/Alert';
import data from '../data/data';

const Dashboard = () => {
  const [timeOffset, setTimeOffset] = useState(24);
  const [metric, setMetric] = useState('weight');

  const isInSelectedTimeframe = (dateTime) => {
    const parseTime = parseDateTime(dateTime);
    const today = new Date(2020, 7, 31, 23, 50);
    const selectedTimeFrame = subHours(today, timeOffset);
    //console.log(parseTime > selectedTimeFrame);
    //console.log(parseTime, selectedTimeFrame);
    return parseTime > selectedTimeFrame;
  };

  const transformedData = {};
  data.forEach((item) => {
    if (isInSelectedTimeframe(item.time)) {
      if (!transformedData[item.de6ce]) {
        transformedData[item.de6ce] = [];
      }
      transformedData[item.de6ce].push(item);
    }
  });
  console.log({ transformedData });
  const [vahaId, setVaha] = useState(Object.keys(transformedData)[0]);
  const nastavujuVahu = (choiceScale) => {
    setVaha(choiceScale);
  };
  return (
    <>
      <p>Dashboard</p>
      <p>vybraná váha je: {vahaId}</p>
      <VyberVahu
        vybranaVaha={vahaId}
        nastavVahu={nastavujuVahu}
        vahyOptions={Object.keys(transformedData)}
      />
      <UdajeVaha
        vaha={vahaId}
        data={transformedData[vahaId]}
        setMetric={setMetric}
      />
      <Graf
        vaha={vahaId}
        data={transformedData[vahaId]}
        setTimeOffset={setTimeOffset}
        metric={metric}
      />
      <Alert />
      <Mapa />
    </>
  );
};
export default Dashboard;
