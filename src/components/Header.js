import React from "react";
import styled from "styled-components";

import "react-toggle/style.css";
import Toggle from "react-toggle";

const Head = styled.header`
  margin: 10vh auto;
  font-size: 2rem;
  text-align: center;
  font-family: "Ultra", serif;

  @media (max-width: 768px)  {
   margin: ${props => (props.inProgress ? '5vh auto' : '5vh auto 10vh')}; 
  }
`;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header(props) {
  return (
    <Head inProgress={props.inProgress}>
      <h1>Triva</h1>
      <div>
        <Label>
          <span style={{ marginRight: "1rem" }}>Darkmode</span>
          <Toggle
            icons={false}
            defaultChecked={false}
            onChange={props.handleSetDarkMode}
          />
        </Label>
      </div>
    </Head>
  );
}
