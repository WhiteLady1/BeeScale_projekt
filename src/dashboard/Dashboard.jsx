import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';

const Dashboard = () => {
  const [vaha, setVaha] = useState('');

  const nastavujuVahu = (choiceScale) => {
    setVaha(choiceScale);
  };

  return (
    <>
      <p>Dashboard</p>
      <p>vybraná váha je: {vaha}</p>
      <VyberVahu nastavVahu={nastavujuVahu} />
      <UdajeVaha />
      <Graf />
      <Alert />
      <Mapa />
    </>
  );
};
export default Dashboard;
