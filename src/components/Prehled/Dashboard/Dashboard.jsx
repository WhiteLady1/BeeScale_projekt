import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Aletr from './Alert/Alert';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  @media (min-width: 1025px) {
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto;
  }
`;

const ChoisMenu = styled.div`
  grid-row: 1/2;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 1;
  }
`;

const Values = styled.div`
  grid-row: 2/6;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 2/5;
  }
`;

const Chart = styled.div`
  grid-row: 6/12;
  @media (min-width: 1025px) {
    grid-column: 3/9;
    grid-row: 1/6;
  }
`;
const Comments = styled.div`
  grid-row: 12/15;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 5/9;
  }
`;
const Map = styled.div`
  grid-row: 15/18;
  @media (min-width: 1025px) {
    grid-column: 3/9;
    grid-row: 6/9;
  }
`;

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
      <Container>
        <ChoisMenu>
          <VyberVahu
            vybranaVaha={vahaId}
            nastavVahu={nastavujuVahu}
            vahyOptions={Object.keys(transformedData)}
          />
        </ChoisMenu>
        <Values>
          {data.length === 0 ? (
            <UdajeVaha vaha={vahaId} data={[{}]} setMetric={setMetric} />
          ) : (
            <UdajeVaha vaha={vahaId} data={data} setMetric={setMetric} />
          )}
        </Values>
        <Chart>
          <Graf
            vaha={vahaId}
            data={data}
            setTimeOffset={setTimeOffset}
            metric={metric}
          />
        </Chart>
        <Comments>
          <Alert />
        </Comments>
        <Map>
          <Mapa vaha={vahaId} />
        </Map>
      </Container>
    </>
  );
};
export default Dashboard;
