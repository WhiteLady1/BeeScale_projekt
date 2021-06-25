import { createGlobalStyle } from 'styled-components';

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

export default GlobalStyle;

//špinavější bílá: #F7F8FA
// světlá šedá: #DDE4ED
