import React, { useEffect, useState } from 'react';
import { Mapa } from './Mapa/Mapa';
import DataOfScale from './ScaleData/DataOfScale';
import ChooseScale from './ChooseScale/ChooseScale';
import Graf from './Graf/Graf';
import Alert from './Alert/Alert';
import { useParams } from 'react-router-dom';
import { Chart, SelectedMenu, Comments, Container, Values, Map } from './style';
import { Weather } from './Weather/Weather';
import { scaleList, usePersistedState } from '../..';

const TOKEN =
  'pk.eyJ1Ijoid2hpdGVsYWR5IiwiYSI6ImNraHVvMmozODFldGoycGt6ZDZlNjRwZmUifQ.vejjMGJgs0GlqR9Ccy6xeg';

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
  console.log(
    localStorageScaleList.find((scale) => scale.SigfoxID === scaleID),
  );
  console.log(scaleID);
  const city = localStorageScaleList.find((scale) => scale.SigfoxID === scaleID)
    .city;
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${TOKEN}`,
    )
      .then((resp) => resp.json())
      .then((json) => {
        setViewport({
          ...viewport,
          latitude: json.features[0].geometry.coordinates[1],
          longitude: json.features[0].geometry.coordinates[0],
        });
        setMesto({
          latitude: json.features[0].geometry.coordinates[1],
          longitude: json.features[0].geometry.coordinates[0],
        });
      });
  }, [city]);

  const [viewport, setViewport] = useState(
    {
      latitude: 50.084209699999995,
      longitude: 14.4477191,
      zoom: 15,
    },
    [],
  );
  const [mesto, setMesto] = useState(null);
  console.log(mesto);
  const handleChangeViewport = (data) => {
    setViewport(data);
  };
  console.log(viewport);
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
        <Weather city={city} />
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
          <Mapa
            mesto={mesto}
            city={city}
            changeViewport={handleChangeViewport}
          />
        </Map>
      </Container>
    </>
  );
};
export default Dashboard;
