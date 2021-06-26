import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-evenly;
  position: relative;
  overflow: hidden;
  min-height: 90vh;
  width: 100%;
  z-index: 2;
  margin: 0;
  padding: 0;
  padding-top: 20px;
  @media (min-width: 600px) {
    //align-items: center;
  }
`;
export const Scale = styled.div`
  margin: 20px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 320px;
  height: 377px;
  //background: rgba(237, 231, 46, 0.1);
  background-image: linear-gradient(
    to right bottom,
    var(--secondcolor07),
    var(--secondcolor03)
  );
  backdrop-filter: blur(5px);
  border-radius: 5px;
`;
