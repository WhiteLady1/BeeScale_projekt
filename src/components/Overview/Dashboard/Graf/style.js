import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: 20px;
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 1025px) {
    margin-top: 0;
  }
`;

export const TimeSelection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const Button = styled.div`
  text-align: center;
  background-color: ${(props) =>
    props.selected ? 'var(--maincolor)' : 'white'};
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border-radius: 10px;
  border: 1px solid var(--greycolor);
  margin: 5px;
  padding: 5px 15px 5px 15px;
  cursor: pointer;
  &:hover {
    background: var(--maincolor);
    color: white;
  }
  @media (min-width: 1025px) {
    padding: 10px 15px 10px 15px;
  }
`;

export const Chart = styled.div`
  width: 90%;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid var(--greycolor);
  li {
    padding-bottom: 15px;
  }
  @media (min-width: 600px) {
    width: 99%;
  }
  @media (min-width: 1025px) {
    height: 500px;
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
