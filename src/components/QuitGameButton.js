import React from "react";

export default function QuitGameButton(props) {
  return <button onClick={props.handleQuitGame}>{props.word}</button>;
}
