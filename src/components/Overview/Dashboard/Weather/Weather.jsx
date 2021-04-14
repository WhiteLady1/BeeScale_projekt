import React, { useEffect, useState } from 'react';
import {
  Container,
  Temperature,
  FeelingTemperature,
  Wind,
  Description,
  WeatherIcon,
} from './WeatherStyled';

export const Weather = (props) => {
  const apiKey = 'ebf39a316c3dfbe41fe285afdc3326e6';
  const [weatherForCity, setWeatherForCity] = useState('');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${apiKey}&lang=cz`,
    )
      .then((resp) => resp.json())
      .then((json) => {
        setWeatherForCity({
          feelsLike: json.main.feels_like,
          temp: json.main.temp,
          wind: json.wind.speed,
          clouds: json.weather[0].description,
          icon: `http://openweathermap.org/img/w/${json.weather[0].icon}.png`,
        });
      });
  }, [props.city]);
  return (
    <>
      <Container>
        <Temperature>{Math.floor(weatherForCity.temp * 10) / 10}°C</Temperature>
        <FeelingTemperature>
          pocitově {Math.floor(weatherForCity.feelsLike * 10) / 10}°C
        </FeelingTemperature>
        <Description>{weatherForCity.clouds}</Description>
        <Wind>vítr {weatherForCity.wind} m/s</Wind>
        <WeatherIcon>
          <img src={weatherForCity.icon} style={{ width: '60px' }}></img>
        </WeatherIcon>
      </Container>
    </>
  );
};
