import React, { useEffect, useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import DataOfScale from './ScaleData/DataOfScale';
import ChooseScale from './ChooseScale/ChooseScale';
import Graf from './Graf/Graf';
import { useParams } from 'react-router-dom';
import {
  Chart,
  SelectedMenu,
  WeatherContainer,
  Comments,
  Container,
  Values,
  Map,
} from './style';
import logo2 from '../../logo_2.svg';
import logo3 from '../../logo_3.svg';
import { Logo2, Logo3 } from '../../../globalStyle';
import { Weather } from './Weather/Weather';
import { scaleList, usePersistedState } from '../..';
import Diary from './Diary/Diary';

const Dashboard = (props) => {
  const { id } = useParams();
  const [metric, setMetric] = useState('weight');
  const { transformedData, setTimeOffset } = props;

  const [scaleID, setScaleID] = useState(id || Object.keys(transformedData)[0]);
  const setScale = (choiceScale) => {
    setScaleID(choiceScale);
  };
  const data = scaleID in transformedData ? transformedData[scaleID] : [];

  // Přesunuto z Mapa a upraveno s použitím scaleID místo props u const city
  const [localStorageScaleList, setlocalStorageScaleList] = usePersistedState(
    scaleList,
    'scaleList',
  );
  console.log(`scaleID je: ${scaleID}`);
  const city = localStorageScaleList.find(
    (scale) => scale.SigfoxID === scaleID,
  ).city;
  return (
    <>
      <Logo2 src={logo2} />
      <Logo3 src={logo3} />
      <Container>
        <SelectedMenu>
          <ChooseScale
            chosenScale={scaleID}
            setTheScale={setScale}
            scaleOptions={Object.keys(transformedData)}
          />
        </SelectedMenu>
        <WeatherContainer>
          <Weather city={city} />
        </WeatherContainer>
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
          <Diary scale={scaleID} />
        </Comments>
        <Map>
          <Mapa city={city} />
        </Map>
      </Container>
    </>
  );
};
export default Dashboard;
