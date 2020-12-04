import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  background-color: rgba(255, 255, 255, 0.5);
  grid-template-columns: auto;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  @media (min-width: 1025px) {
    grid-template-columns: auto auto auto auto auto auto auto auto;
    grid-template-rows: auto auto auto auto auto auto auto auto;
  }
`;

export const SelectedMenu = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1/2;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 1;
  }
`;

export const Values = styled.div`
  grid-row: 2/6;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 2/5;
  }
`;

export const Chart = styled.div`
  grid-row: 6/12;
  @media (min-width: 1025px) {
    grid-column: 3/9;
    grid-row: 1/6;
  }
`;
export const Comments = styled.div`
  grid-row: 12/15;
  @media (min-width: 1025px) {
    grid-column: 1/3;
    grid-row: 5/9;
  }
`;
export const Map = styled.div`
  grid-row: 15/18;
  @media (min-width: 1025px) {
    grid-column: 3/9;
    grid-row: 6/9;
  }
`;