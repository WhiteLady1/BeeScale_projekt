import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    display: grid;
    grid-template-rows: auto auto auto;
    grid-template-columns: auto auto auto auto auto auto;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 30px 10px 30px;
  background-color: ${(props) =>
    props.selected ? 'var(--maincolor)' : 'white'};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border: 1px solid #ededed;
  border-radius: 50px;
  margin-right: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  p {
    margin: 0;
  }
  &:hover {
    background: var(--maincolor);
    color: white;
  }
  &:focus {
    background: var(--maincolor);
    color: white;
  }

  @media (min-width: 600px) {
    margin: 5px;
    border-radius: 10px;
  }
  @media (min-width: 1025px) {
    padding: 5px 20px 5px 20px;
    margin-right: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const WeightValues = styled(Values)`
  @media (min-width: 600px) {
    grid-row: 1/3;
    grid-column: 1/4;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 25px;
    padding: 30px;
  }
`;
export const TemValues = styled(Values)`
  @media (min-width: 600px) {
    grid-row: 3;
    grid-column: 1/7;
  }
`;
export const HumidityValues = styled(Values)`
  @media (min-width: 600px) {
    grid-row: 1/2;
    grid-column: 4/7;
  }
`;
export const VoltageValues = styled(Values)`
  @media (min-width: 600px) {
    grid-row: 2/3;
    grid-column: 4/7;
  }
`;

export const WrapperTem = styled.div`
  display: flex;
  align-items: space-between;
  width: 100%;
  @media (min-width: 600px) {
  }
  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const TemIn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  width: 100%;
  @media (min-width: 600px) {
    justify-content: space-around;
  }
  @media (min-width: 1025px) {
    padding-bottom: 0px;
    justify-content: center;
  }
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const WrapperValue = styled.div`
  display: flex;
  padding-right: 20px;
  @media (min-width: 600px) {
    padding-right: 0;
  }
  @media (min-width: 1025px) {
    padding-right: 0px;
    padding-left: 10px;
  }
`;
export const Value = styled.div`
  @media (min-width: 1025px) {
    padding-left: 10px;
  }
`;
export const Unite = styled.div`
  padding-left: 3px;
`;
export const Time = styled.div`
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  padding: 10px;
  @media (min-width: 600px) {
    text-align: right;
  }
`;
