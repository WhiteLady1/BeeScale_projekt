import styled from 'styled-components';

export const ListItem = styled.div`
  color: black;
  color: ${(props) => (props.selected ? 'white' : 'black')};
  border-bottom: ${(props) => (props.selected ? 'white 1px solid' : '')};
  &:hover {
    color: var(--maincolor);
  }
  @media (min-width: 768px) {
    color: ${(props) => (props.selected ? 'var(--maincolor)' : 'black')};
    border-bottom: ${(props) =>
      props.selected ? 'var(--maincolor) 1px solid' : ''};
    cursor: pointer;
  }
  @media (min-width: 1000px) {
    border-bottom: ${(props) =>
      props.selected ? 'var(--maincolor) 1px solid' : ''};
    cursor: pointer;
  }
`;
const Ul = styled.ul`
  z-index: 3;
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    text-transform: uppercase;
    margin-right: 25px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: var(--maincolor);
    position: fixed;
    transform: ${(props) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'};
    margin: 0;
    top: 0;
    right: 0;
    height: 30vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      margin-top: 10px;
    }

    li:first-child {
      padding-top: 0px;
    }
  }
`;

export default Ul;
