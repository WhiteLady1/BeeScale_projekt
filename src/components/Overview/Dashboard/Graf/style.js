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
  justify-content: space-between;
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
  width: 90%;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid #ededed;
  li {
    padding-bottom: 15px;
  }
`;
export const Button = styled.div`
  width: 250px;
  text-align: center;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #ededed;
  margin: 5px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  &:hover {
    background: #ffb802;
    color: white;
  }
`;
export const NoData = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 0px 20px;
  @media (min-width: 1025px) {
    flex: 10 0 auto;
  }
`;
