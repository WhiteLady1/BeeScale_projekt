import styled from 'styled-components';

export const MapSeznam = styled.div`
  img {
    position: absolute;
    width: 150px;
    left: -30px;
    top: 130px;
  }
`;
export const MapStyled = styled.div`
  height: 200px;
  margin: 10px 10px 0 10px;
  border: 1px solid var(--greycolor);
  border-radius: 10px;
  @media (min-width: 600px) {
    height: 90%;
  }
`;

export const MarkerBtn = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
  display: flex;
  outline: none;
  cursor: pointer;
`;

export const Navigation = styled.div`
  position: absolute;
  top: 10px;
  right: 40px;
`;
