import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

html, body{
  height: 100%;
  background-color: #45b34a;

}

a{
  text-decoration: none;
}

li {
  list-style: none;
}

button{
  cursor: pointer;
}

button,
input{
  border: 0;
  background: none;
  outline: none;
}

h1, h2, h3, h4, h5, h6{
  font-family: niveau-grotesk,sans-serif;
}
`;
