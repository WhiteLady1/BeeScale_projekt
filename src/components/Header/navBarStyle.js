import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  li {
    margin-top: 15px;
  }

  .navbar-logo {
    padding: 10px 10px;
    font-size: 30px;
  }
  .navbar-logo :hover {
    color: #ffb802;
  }
`;

export default StyledHeader;