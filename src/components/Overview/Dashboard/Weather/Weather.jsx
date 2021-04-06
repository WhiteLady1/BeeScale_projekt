import React, { useEffect, useState } from 'react';
import { scaleList, usePersistedState } from '../../..';

export const Weather = (props) => {
  const apiKey = 'ebf39a316c3dfbe41fe285afdc3326e6';
  const [weatherForCity, setWeatherForCity] = useState('');
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}`,
    )
      .then((resp) => resp.json())
      .then((json) => {
        setWeatherForCity({
          feelsLike: json.main.feels_like,
          temp: json.main.temp,
        });
      });
  }, [props.city]);
  return (
    <>
      <div>
        Počasí: Teplota:{' '}
        {Math.floor((weatherForCity.temp - 273.15) * 100) / 100}°C Pociťová
        teplota: {Math.floor((weatherForCity.feelsLike - 273.15) * 100) / 100}°C
      </div>
    </>
  );
};
