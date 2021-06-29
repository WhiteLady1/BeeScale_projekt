import styled from 'styled-components';

export const DashboardPage = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 90vh;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto auto auto auto auto;
  @media (min-width: 600px) {
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    z-index: 2;
    /*
    background-image: linear-gradient(
      to right bottom,
      var(--secondcolor07),
      var(--secondcolor03)
    );
    backdrop-filter: blur(5px);
    border-radius: 15px;
    margin: 50px;
    padding: 20px;
    */
  }
  @media (min-width: 1025px) {
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto auto auto;
    z-index: 2;
    background-image: linear-gradient(
      to right bottom,
      var(--secondcolor07),
      var(--secondcolor03)
    );
    backdrop-filter: blur(5px);
    border-radius: 15px;
    margin: 50px;
    padding: 20px;
  }
`;

export const SelectedMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1/2;
  @media (min-width: 600px) {
    grid-column: 1/4;
  }
  @media (min-width: 1025px) {
    grid-row: 1;
  }
`;

export const WeatherContainer = styled.div`
  grid-row: 2/3;
  @media (min-width: 600px) {
    grid-row: 2/6;
    grid-column: 4/5;
  }
  @media (min-width: 1025px) {
    grid-row: 1/2;
    grid-column: 4/6;
    padding-top: 20px;
  }
`;

export const Values = styled.div`
  grid-row: 3/6;
  @media (min-width: 600px) {
    grid-row: 2/6;
    grid-column: 1/4;
  }
  @media (min-width: 1025px) {
    grid-row: 2/3;
    grid-column: 1/11;
  }
`;

export const Chart = styled.div`
  grid-row: 6/13;
  @media (min-width: 600px) {
    grid-row: 6/7;
    grid-column: 1/5;
  }
  @media (min-width: 1025px) {
    grid-row: 3/7;
    grid-column: 1/11;
  }
`;
export const Comments = styled.div`
  grid-row: 13/16;
  @media (min-width: 600px) {
    grid-row: 7/10;
    grid-column: 4/5;
  }
  @media (min-width: 1025px) {
    grid-row: 7/10;
    grid-column: 8/11;
  }
`;
export const Map = styled.div`
  grid-row: 16/19;
  @media (min-width: 600px) {
    grid-row: 7/10;
    grid-column: 1/4;
  }
  @media (min-width: 1025px) {
    grid-row: 7/10;
    grid-column: 1/8;
  }
`;
