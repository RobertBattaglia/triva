import React from "react";
import styled from 'styled-components'

const Foot = styled.footer`
  margin: 10vh auto;

  @media (max-width: 768px)  {
   margin: 5vh auto; 
  }
`;

export default function Footer(props) {
  return (
    <Foot />
  );
}
