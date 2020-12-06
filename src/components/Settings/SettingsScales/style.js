import styled from 'styled-components';

export const Form = styled.form`

button {
  width: 200px;
  height: 50px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #ededed;
  margin: 5px;
  padding: 5px 10px 5px 10px;
  cursor: pointer;
  &:hover {
    background: #ffb802;
    color: white;
  }

button a {
  text-decoration: none;
  color: white;
}
`
export const Input = styled.input`
background: white;
width: 75%;
border: 1px solid #ededed;
border-radius: 4px
box-sizing: border-box;
font-size: 14px;
padding: 5px;
`

export const Label = styled.label`
padding: 5px;
`

export const Ul = styled.ul`
list-style: none;

li {
  padding-bottom: 10px;
  display:flex;
flex-direction: column;
}
`

export const Div = styled.div`

`
