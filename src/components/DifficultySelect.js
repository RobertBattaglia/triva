import React from "react";
import { Select } from "../styles";

export default function DifficultySelect(props) {
  function setDifficultly(event) {
    props.handleSetDifficulty(event.target.value);
  }

  return (
    <Select darkMode={props.darkMode} onChange={setDifficultly}>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </Select>
  );
}
