import React from "react";
import { Button } from "../styles";

export default function StartGameButton(props) {
  return <Button onClick={props.handleStartGame}>Start Game!</Button>;
}
