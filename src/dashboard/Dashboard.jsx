import React from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <VyberVahu />
      <UdajeVaha />
      <Mapa />
    </>
  );
};
export default Dashboard;
