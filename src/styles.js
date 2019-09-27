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
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro|Ultra&display=swap');
  font-family: 'Source Sans Pro', sans-serif;
  background: ${props =>
    props.darkMode
      ? "linear-gradient(to bottom right, #1E1F26, #4D648D)"
      : "linear-gradient(to bottom right, #FF4136, #FFDC00)"}; 
  color: ${props => (props.darkMode ? "#fff" : "#111111")};
  min-height: 100vh;
  padding: 0 5vw;
}
`;

export const Button = styled.div`
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
  background: ${props =>
    props.darkMode
      ? "linear-gradient(to bottom left, #4D648D, #1E1F26)"
      : "linear-gradient(to bottom left, #FFDC00, #FF4136)"};
  border: solid ${props => (props.darkMode ? "#fff" : "#111111")} 3px;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8);
  transition-duration: 1500;
  &:hover {
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.6);
    background: ${props =>
      props.darkMode
        ? "linear-gradient(to bottom left, #1E1F26, #4D648D)"
        : "linear-gradient(to bottom left, #ff4136, #ffdc00)"};
    cursor: pointer;
  }
  &:active {
    transform: translate(0);
  }
`;

export const Select = styled.select`
  display: block;
  margin: 1rem auto;
  font-size: calc(1rem + 1vw);
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 50%;
  border: 3px solid ${props => (props.darkMode ? "#DDDDDD" : "#111111")};
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #fff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;
