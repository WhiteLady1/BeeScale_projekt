import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  --maincolor:rgb(237, 231, 46);
  --secondcolor:rgb(251, 255, 170)
}
body{
  font-family: 'Open Sans', sans-serif;
  background-color: white;
  //background-color:RGB(249,250,252);
}
a{
  text-decoration:none;
  color: black
}`;

export default GlobalStyle;

//špinavější bílá: #F7F8FA
// světlá šedá: #DDE4ED
