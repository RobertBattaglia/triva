import React from "react";
import { Button } from "../styles";

export default function QuitGameButton(props) {
  return (
    <Button darkMode={props.darkMode} onClick={props.handleQuitGame}>
      {props.word}
    </Button>
  );
}
