import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  --maincolor:rgb(237, 231, 46);
  --secondcolor:rgb(251, 255, 170);
  --btncolor:rgb(66, 66, 66);
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: white;
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
    left: 500px;
    top: -150px;
  }
  @media (min-width: 1025px) {
    left: 700px;
    top: -150px;
  }
`;
export const Logo3 = styled.img`
  display: none;
  @media (min-width: 600px) {
    display: block;
    position: absolute;
    z-index: -1;
    right: 500px;
    bottom: -150px;
  }
  @media (min-width: 1025px) {
    right: 700px;
    bottom: -150px;
  }
`;
export default GlobalStyle;

//špinavější bílá: #F7F8FA
// světlá šedá: #DDE4ED
