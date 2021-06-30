import styled from 'styled-components';

export const Cross = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 12px;
  width: 20px;
  height: 20px;
  color: black;
`;

export const Form = styled.form`
  font-size: 18px;

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

    a {
      text-decoration: none;
      color: white;
    }
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

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    position: relative;
    padding: 30px;
    border-radius: 50px;
    border: 1px solid var(--greycolor);
    margin: 10px;
    margin-bottom: 20px;
    @media (min-width: 600px) {
      width: 270px;
    }
  }
`;
