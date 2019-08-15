import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing : border-box;
} 
html {
  font-size: 62.5%
}
body {
  background: linear-gradient(to bottom right, #F0810F, #E6DF44);
  height: 100vh
}
`;

export const Button = styled.div`
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
  background: linear-gradient(to bottom right, #e6df44, #f0810f);
  border: solid black 3px;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8);
  &:hover {
    transform: translateY(-5%);
    box-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.6);
    background: linear-gradient(to bottom left, #e6df44, #f0810f);
    cursor: pointer;
  }
  &:active {
    transform: translate(0);
  }
`;
