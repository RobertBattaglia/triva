import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  margin: 3rem auto;
  font-size: 2rem;
`;

export default function Scoreboard(props) {
  return <Paragraph>Score: {props.score}</Paragraph>;
}
