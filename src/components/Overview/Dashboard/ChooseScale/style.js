import styled from 'styled-components';

export const FormGroup = styled.div`
  -webkit-display: flex;
  -webkit-flex: wrap;
  -webkit-justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  font-size: 20px;

  a {
    padding-left: 15px;
  }
  @media (min-width: 600px) {
    flex-wrap: nowrap;
  }
`;
export const Label = styled.label`
  margin: 0.5rem;
  font-size: 14px;
  @media (min-width: 600px) {
    margin: 1rem;
  }
`;

export const Select = styled.select`
  padding: 0.5em;
  background: white;
  border: none;
  border-radius: 3px;
  width: 85%;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  font-size: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 2px;
  @media (min-width: 600px) {
    width: 73%;
  }
`;
