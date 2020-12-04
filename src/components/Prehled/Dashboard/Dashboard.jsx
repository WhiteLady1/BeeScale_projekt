import React, { useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import DataOfScale from './ScaleData/DataOfScale';
import ChooseScale from './ChooseScale/ChooseScale';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { useParams } from 'react-router-dom';
import { Chart, SelectedMenu, Comments, Container, Values, Map } from './style';

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
        <SelectedMenu>
          <ChooseScale
            vybranaVaha={vahaId}
            nastavVahu={nastavujuVahu}
            vahyOptions={Object.keys(transformedData)}
          />
        </SelectedMenu>
        <Values>
          {data.length === 0 ? (
            <DataOfScale vaha={vahaId} data={[{}]} setMetric={setMetric} />
          ) : (
            <DataOfScale vaha={vahaId} data={data} setMetric={setMetric} />
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
