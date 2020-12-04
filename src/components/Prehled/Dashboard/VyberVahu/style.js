import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  font-size: 20px;
  justify-content: space-around;
`;
export const Label = styled.label`
  paddind-left: 10px;
  margin-bottom: 0.5em;
  width: 100%;
  font-size: 14px;
`;

export const Select = styled.select`
  padding: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  width: 85%;
  margin-bottom: 0.5em;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 2px;
`;
