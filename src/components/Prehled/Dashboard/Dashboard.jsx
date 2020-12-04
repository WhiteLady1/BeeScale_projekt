import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import UdajeVaha from './UdajeVaha/UdajeVaha';
import VyberVahu from './VyberVahu/VyberVahu';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { useParams } from 'react-router-dom';
import { Chart, ChoisMenu, Comments, Container, Values, Map } from './style';

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
