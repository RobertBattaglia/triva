import React from "react";

export default function NumberSelect(props) {
  function setNumber(event) {
    props.handleSetNumber(event.target.value);
  }

  return (
    <select onChange={setNumber}>
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
    </select>
  );
}
