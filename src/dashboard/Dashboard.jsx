import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { scale as scaleList } from './scale';

const Dashboard = () => {
  const [vaha, setVaha] = useState(`${scaleList[0].de6ce}`);

  const nastavujuVahu = (choiceScale) => {
    setVaha(choiceScale);
  };

  return (
    <>
      <p>Dashboard</p>
      <p>vybraná váha je: {vaha}</p>
      <VyberVahu vybranaVaha={vaha} nastavVahu={nastavujuVahu} />
      <UdajeVaha vaha={vaha} />
      <Graf />
      <Alert />
      <Mapa />
    </>
  );
};
export default Dashboard;
