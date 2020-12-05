import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  width: 100%;
  @media (min-width: 600px) {
    align-items: center;
  }
`;
export const Scale = styled.div`
  margin: 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 320px;
  height: 377px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
`;
