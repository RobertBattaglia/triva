import React from "react";
import styled from "styled-components";

const Paragraph = styled.p`
  margin: 2rem auto;
  font-size: 3rem;
`;

export default function Scoreboard(props) {
  return <Paragraph>Score: {props.score}</Paragraph>;
}
