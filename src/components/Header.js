import React from "react";
import styled from "styled-components";

import "react-toggle/style.css";
import Toggle from "react-toggle";

const Head = styled.header`
  margin: 3rem auto;
  font-size: 2rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const DarkMode = styled.div``;

const Label = styled.label``;

export default function Header(props) {
  return (
    <Head>
      <h1>Trivia</h1>
      <DarkMode>
        <Label>
          <span>Darkmode</span>
          <Toggle
            icons={false}
            defaultChecked={false}
            onChange={props.handleSetDarkMode}
          />
        </Label>
      </DarkMode>
    </Head>
  );
}
