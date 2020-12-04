import styled from 'styled-components';

export const Time = styled.div`
  font-size: 13px;
  font-weight: 300;
  text-align: center;
  padding: 10px;
  @media (min-width: 1025px) {
    text-align: right;
  }
`;

export const Wrapper = styled.div`
  margin: 0;
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const Values = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding: 10px 50px 10px 50px;
  background-color: white;
  border: 1px solid #ededed;
  border-radius: 50px;
  margin-right: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #ffb802;
    color: white;
  }
  @media (min-width: 1025px) {
    padding: 5px 20px 5px 20px;
    margin-right: 20px;
    width: 100%;
    border: 1px solid #ededed;

    display: flex;
    justify-content: center;
  }
`;
export const WrapperTem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media (min-width: 1025px) {
    flex-direction: row;
    align-items: center;
  }
`;
export const TemIn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  padding-bottom: 10px;
  @media (min-width: 1025px) {
    padding-bottom: 0px;
  }
`;

export const TemOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;
export const WrapperValue = styled.div`
  display: flex;
  padding-right: 20px;
  @media (min-width: 1025px) {
    padding-right: 0px;
    padding-left: 10px;
  }
`;
export const Value = styled.div`
  @media (min-width: 1025px) {
    padding-left: 5px;
  }
`;
export const Unite = styled.div`
  padding-left: 3px;
`;
