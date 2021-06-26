import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  --maincolor:rgb(237, 231, 46);
  --secondcolor:rgb(251, 255, 170);
  --secondcolor07:rgba(237, 231, 46, 0.2);
  --secondcolor03:rgba(251, 255, 170, 0.2);
  --btncolor:rgb(66, 66, 66);
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  min-height: 100vh;
  position: relative;
  color: rgb(66, 66, 66);
}
a{
  text-decoration:none;
  color: black
}`;
export const Logo2 = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    position: absolute;
    z-index: -1;
    left: 60%;
  }
  @media (min-width: 1000px) {
    left: 70%;
  }
  @media (min-width: 1200px) {
    left: 75%;
  }
  @media (min-width: 1500px) {
    left: 80%;
  }
`;
export const Logo3 = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    position: absolute;
    z-index: -1;
    right: 60%;
    bottom: -20%;
  }
  @media (min-width: 1000px) {
    right: 70%;
    bottom: -30%;
  }
  @media (min-width: 1200px) {
    right: 75%;
    bottom: -30%;
  }
  @media (min-width: 1500px) {
    right: 80%;
    bottom: -30%;
  }
`;
export default GlobalStyle;
