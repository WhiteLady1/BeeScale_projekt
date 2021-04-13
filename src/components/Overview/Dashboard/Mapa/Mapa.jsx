import React, { useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  GeolocateControl,
} from 'react-map-gl';
import spendlikUrl from './img/pin.svg';
import mapySeznam from './img/mapy_logo.svg';
import { MapSeznam, MapStyled, MarkerBtn, Navigation } from './MapStyled';

const TOKEN =
  'pk.eyJ1Ijoid2hpdGVsYWR5IiwiYSI6ImNraHVvMmozODFldGoycGt6ZDZlNjRwZmUifQ.vejjMGJgs0GlqR9Ccy6xeg';

export const Mapa = (props) => {
  useEffect(() => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${props.city}.json?access_token=${TOKEN}`,
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
  }, [props.city]);

  const [mesto, setMesto] = useState(null);
  const [viewport, setViewport] = useState(
    {
      latitude: 50.084209699999995,
      longitude: 14.4477191,
      zoom: 15,
    },
    [],
  );
  const getMesto = (data) => {
    props.getCoordinates(data);
  };
  useEffect(() => {
    getMesto(mesto), [mesto];
  });
  const seznamMapy = {
    version: 8,
    sources: {
      osm: {
        type: 'raster',
        tiles: ['https://mapserver.mapy.cz/base-m/{z}-{x}-{y}'],
        minzoom: 0,
        maxzoom: 19,
        tileSize: 256,
      },
    },
    layers: [
      {
        id: 'osm',
        type: 'raster',
        source: 'osm',
      },
    ],
  };
  const [popupOtevren, setPopupOtevren] = useState(false);
  return (
    <MapStyled>
      <ReactMapGL
        {...viewport}
        width="100%"
        height={200}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken="pk.eyJ1Ijoid2hpdGVsYWR5IiwiYSI6ImNraHVvMmozODFldGoycGt6ZDZlNjRwZmUifQ.vejjMGJgs0GlqR9Ccy6xeg"
        mapStyle={seznamMapy}
      >
        <Navigation className="ovladani">
          <NavigationControl />
          <GeolocateControl />
        </Navigation>
        {mesto && (
          <Marker
            latitude={mesto.latitude}
            longitude={mesto.longitude}
            offsetLeft={-25}
            offsetTop={-50}
          >
            <MarkerBtn onClick={() => setPopupOtevren(true)}>
              <img src={spendlikUrl} width={50} height={50} alt="Adresa úlu" />
            </MarkerBtn>
          </Marker>
        )}
        {popupOtevren && mesto && (
          <Popup
            latitude={mesto.latitude}
            longitude={mesto.longitude}
            offsetTop={-50}
            onClose={() => setPopupOtevren(false)}
          >
            {props.city}
          </Popup>
        )}
        <MapSeznam>
          <img src={mapySeznam} alt="Seznam mapy" />
        </MapSeznam>
      </ReactMapGL>
    </MapStyled>
  );
};
