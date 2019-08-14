import React, { Component } from "react";

export default class GameBoard extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <h3>{question.question}</h3>
        <button>{question.correct_answer}</button>
        <button>{question.incorrect_answers[0]}</button>
        <button>{question.incorrect_answers[1]}</button>
        <button>{question.incorrect_answers[2]}</button>
      </div>
    );
  }
}
