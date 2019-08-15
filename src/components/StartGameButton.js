import React from "react";
import { Button } from "../styles";

export default function StartGameButton(props) {
  return (
    <Button darkMode={props.darkMode} onClick={props.handleStartGame}>
      Start Game!
    </Button>
  );
}
