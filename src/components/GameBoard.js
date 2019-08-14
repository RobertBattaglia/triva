import React, { Component } from "react";

export default class GameBoard extends Component {
  render() {
    const { question } = this.props;

    const checkQuestion = value => {
      this.props.handleCheckQuestion(value);
    };

    return (
      <div>
        <h3>{question.question}</h3>
        <button onClick={() => checkQuestion(question.correct_answer)}>
          {question.correct_answer}
        </button>
        <button onClick={() => checkQuestion(question.incorrect_answers[0])}>
          {question.incorrect_answers[0]}
        </button>
        <button onClick={() => checkQuestion(question.incorrect_answers[1])}>
          {question.incorrect_answers[1]}
        </button>
        <button onClick={() => checkQuestion(question.incorrect_answers[2])}>
          {question.incorrect_answers[2]}
        </button>
      </div>
    );
  }
}
