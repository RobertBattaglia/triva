import React from "react";

export default function Scoreboard(props) {
  return (
    <React.Fragment>
      <p>Score {props.score}</p>
    </React.Fragment>
  );
}
