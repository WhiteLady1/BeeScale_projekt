import styled from 'styled-components';

export const ContainerDiary = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  font-size: 18px;
`;
export const DiaryHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  margin-bottom: 10px;
`;
export const NewRecordIkon = styled.div`
  display: flex;
  margin-left: 20px;
`;
export const NewRecordForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    padding: 0.5em;
    border: none;
    border-radius: 3px;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 2px;
  }
  button {
    border: none;
    background: none;
  }
  div {
    display: flex;
  }
`;

export const NewRecordSubmit = styled.div`
  margin: 10px;
  button {
    border: none;
    background: none;
  }
`;
