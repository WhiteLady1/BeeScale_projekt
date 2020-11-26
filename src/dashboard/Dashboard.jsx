import React from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <VyberVahu />
      <UdajeVaha />
      <Graf />
      <Mapa />
    </>
  );
};
export default Dashboard;
