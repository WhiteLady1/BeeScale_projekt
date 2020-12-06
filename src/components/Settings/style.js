import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 5px;
`;

export const SettingsLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
`;

export const UserSettings = styled.div`
  padding: 5px 20px 5px 20px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ededed;
  margin-bottom: 10px;
  &:hover {
    background: #ffb802;
    color: white;
  }
`;
export const ScalesSettings = styled.div`
  text-align: center;
  padding: 5px 20px 5px 20px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #ededed;
  &:hover {
    background: #ffb802;
    color: white;
  }
`;
