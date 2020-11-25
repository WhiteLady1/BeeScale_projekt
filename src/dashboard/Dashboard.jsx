import React from 'react';
import { Mapa } from './Mapa/Mapa';
import { UdajeVaha } from './UdajeVaha/UdajeVaha';

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
      <UdajeVaha />
      <Mapa />
    </>
  );
};
export default Dashboard;
