import React from "react";

export default function DifficultySelect(props) {
  function setDifficultly(event) {
    props.handleSetDifficulty(event.target.value);
  }

  return (
    <select onChange={setDifficultly}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
}
