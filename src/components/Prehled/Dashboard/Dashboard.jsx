import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { useParams } from 'react-router-dom';

const Dashboard = (props) => {
  const { id } = useParams();
  const [metric, setMetric] = useState('weight');
  const { transformedData, setTimeOffset } = props;

  const [vahaId, setVaha] = useState(id || Object.keys(transformedData)[0]);
  const nastavujuVahu = (choiceScale) => {
    setVaha(choiceScale);
  };
  const data = vahaId in transformedData ? transformedData[vahaId] : [];

  return (
    <>
      <p>Dashboard</p>
      <p>vybraná váha je: {vahaId}</p>
      <VyberVahu
        vybranaVaha={vahaId}
        nastavVahu={nastavujuVahu}
        vahyOptions={Object.keys(transformedData)}
      />
      {data.length === 0 ? (
        <UdajeVaha vaha={vahaId} data={[{}]} setMetric={setMetric} />
      ) : (
        <UdajeVaha vaha={vahaId} data={data} setMetric={setMetric} />
      )}
      <Graf
        vaha={vahaId}
        data={data}
        setTimeOffset={setTimeOffset}
        metric={metric}
      />
      <Alert />
      <Mapa vaha={vahaId} />
    </>
  );
};
export default Dashboard;
