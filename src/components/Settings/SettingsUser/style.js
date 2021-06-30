import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  font-size: 18px;
  margin-left: 20px;

  button {
    width: 200px;
    height: 50px;
    text-align: center;
    text-transform: uppercase;
    background-color: white;
    border-radius: 50px;
    border: 1px solid var(--greycolor);
    margin: 5px;
    padding: 5px 10px 5px 10px;
    cursor: pointer;
    &:hover {
      background: var(--maincolor);
      color: white;
    }
  }
  button a {
    text-decoration: none;
    color: white;
  }
`;
export const Input = styled.input`
  background: white;
  width: 100%;
  border: 1px solid var(--greycolor);
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 5px;
  font-size: 15px;
  @media (min-width: 600px) {
    display: flex;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
