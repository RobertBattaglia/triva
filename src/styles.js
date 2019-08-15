import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing : border-box;
} 

body {
  background: linear-gradient(to bottom right, #F0810F, #E6DF44);
  height: 100vh
}
`;

export default GlobalStyle;
