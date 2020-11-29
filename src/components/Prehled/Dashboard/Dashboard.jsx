import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';

const Dashboard = (props) => {
  const [metric, setMetric] = useState('weight');
  const { transformedData, setTimeOffset } = props;

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
