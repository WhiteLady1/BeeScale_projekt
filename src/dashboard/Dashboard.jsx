import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import data from '../data/data';

const Dashboard = () => {
  const transformedData = {};
  data.forEach((item) => {
    if (!transformedData[item.de6ce]) {
      transformedData[item.de6ce] = [];
    }
    transformedData[item.de6ce].push(item);
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
      <UdajeVaha vaha={vahaId} data={transformedData[vahaId]} />
      <Graf vaha={vahaId} data={transformedData[vahaId]} />
      <Alert />
      <Mapa />
    </>
  );
};
export default Dashboard;
