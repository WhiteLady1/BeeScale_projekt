import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 1025px) {
    flex-direction: row-reverse;
  }
`;

export const TimeSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

export const Chart = styled.div`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  li {
    padding-bottom: 15px;
  }
`;
export const Button = styled.div`
  width: 250px;
  text-align: center;
  background-color: white;
  border-radius: 50px;
  margin: 5px;
  padding: 5px 10px 5px 10px;
  &:hover {
    background: #ffb802;
    color: white;
  }
`;
