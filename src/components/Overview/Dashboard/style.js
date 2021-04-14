import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  background-color: rgba(255, 255, 255, 0.5);
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto auto auto auto auto;
  @media (min-width: 1025px) {
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
  }
`;

export const SelectedMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1/2;
  @media (min-width: 1025px) {
    grid-column: 1/4;
    grid-row: 1;
  }
`;

export const WeatherContainer = styled.div`
  grid-row: 2/3;
  @media (min-width: 1025px) {
    grid-column: 4/6;
    grid-row: 1/2;
    padding-top: 20px;
  }
`;

export const Values = styled.div`
  grid-row: 3/6;
  @media (min-width: 1025px) {
    grid-column: 1/11;
    grid-row: 2/3;
  }
`;

export const Chart = styled.div`
  grid-row: 6/13;
  @media (min-width: 1025px) {
    grid-column: 1/11;
    grid-row: 3/7;
  }
`;
export const Comments = styled.div`
  grid-row: 13/16;
  @media (min-width: 1025px) {
    grid-column: 8/11;
    grid-row: 7/10;
  }
`;
export const Map = styled.div`
  grid-row: 16/19;
  @media (min-width: 1025px) {
    grid-column: 1/8;
    grid-row: 7/10;
  }
`;
