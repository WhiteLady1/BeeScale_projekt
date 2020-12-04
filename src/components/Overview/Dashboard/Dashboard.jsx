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

  const [scaleID, setScaleID] = useState(id || Object.keys(transformedData)[0]);
  const setScale = (choiceScale) => {
    setScaleID(choiceScale);
  };
  const data = scaleID in transformedData ? transformedData[scaleID] : [];

  return (
    <>
      <Container>
        <SelectedMenu>
          <ChooseScale
            chosenScale={scaleID}
            setTheScale={setScale}
            scaleOptions={Object.keys(transformedData)}
          />
        </SelectedMenu>
        <Values>
          {data.length === 0 ? (
            <DataOfScale vaha={scaleID} data={[{}]} setMetric={setMetric} />
          ) : (
            <DataOfScale vaha={scaleID} data={data} setMetric={setMetric} />
          )}
        </Values>
        <Chart>
          <Graf
            vaha={scaleID}
            data={data}
            setTimeOffset={setTimeOffset}
            metric={metric}
          />
        </Chart>
        <Comments>
          <Alert />
        </Comments>
        <Map>
          <Mapa vaha={scaleID} />
        </Map>
      </Container>
    </>
  );
};
export default Dashboard;
