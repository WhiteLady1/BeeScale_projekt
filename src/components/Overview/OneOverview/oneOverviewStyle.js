import styled from 'styled-components';

export const Wrapper = styled.div``;

export const WrapperHeader = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  color: rgb(56, 53, 37);
  &:hover {
    background: var(--maincolor);
    color: white;
  }
`;
export const Weight = styled.div`
  padding-left: 5px;
`;
export const WrapperBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;
  &:hover {
    background: var(--maincolor);
    color: white;
  }
`;
export const Values = styled.div`
  display: flex;
  width: 35%;
  padding: 15px;
  font-size: 18px;
`;
export const TemperatureIn = styled(Values)`
  border-bottom: #f7f8fa 1px solid;
  border-right: #f7f8fa 1px solid;
`;
export const TemperatureOut = styled(Values)`
  border-bottom: #f7f8fa 1px solid;
  border-left: #f7f8fa 1px solid;
`;
export const Humidity = styled(Values)`
  margin-top: 10px;
  border-top: #f7f8fa 1px solid;
  border-right: #f7f8fa 1px solid;
  text-align: right;
`;
export const Voltage = styled(Values)`
  margin-top: 10px;
  border-top: #f7f8fa 1px solid;
  border-left: #f7f8fa 1px solid; ;
`;
export const WrapperIcon = styled.div`
  display: flex;
  align-items: center;
`;
export const Value = styled.div`
  padding: 0;
  padding-left: 5px;
`;
export const Unite = styled.div`
  padding-left: 1px;
`;
export const LastMeasurement = styled.div`
  font-size: 15px;
  padding: 15px;
  font-weight: 200;
  &:hover {
    background: var(--maincolor);
    color: white;
  }
`;
