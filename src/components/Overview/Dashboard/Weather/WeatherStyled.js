import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto auto auto auto auto auto;
  justify-content: space-evenly;
  align-items: center;
`;

export const Temperature = styled.div`
  font-size: 25px;
  grid-row: 1/3;
  grid-column: 2/4;
`;
export const FeelingTemperature = styled.div`
  grid-row: 1/2;
  grid-column: 4/5;
`;
export const Wind = styled.div`
  grid-row: 2/3;
  grid-column: 4/5;
`;
export const Description = styled.div`
  display: none;
`;
export const WeatherIcon = styled.div`
  padding-top: 10px;
  grid-row: 1/3;
  grid-column: 5/7;
`;
