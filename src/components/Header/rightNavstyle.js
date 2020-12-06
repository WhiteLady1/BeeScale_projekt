import styled from 'styled-components';

export const ListItem = styled.div`
  color: ${(props) => (props.selected ? '#ffb802' : 'black')};
  &:hover {
    color: #ffb802;
  }
`;
const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;

  li {
    text-transform: uppercase;
    margin-right: 25px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffb802;
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
