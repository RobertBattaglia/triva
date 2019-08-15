import React from "react";
import styled from "styled-components";

const Head = styled.header`
  margin-top: 2.5vh;
  font-size: 2rem;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Header() {
  return (
    <Head>
      <h1>Trivia</h1>
    </Head>
  );
}
