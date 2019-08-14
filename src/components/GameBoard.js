import React, { Component } from "react";

export default class GameBoard extends Component {
  render() {
    const { question, correct_answer, incorrect_answers } = this.props.question;

    const handleClick = value => {
      this.props.handleCheckQuestion(value);
    };

    const renderRandomOrder = () => {
      const correctAnswerIndex = Math.floor(Math.random() * 4);
      let allAnswers = incorrect_answers.slice();
      allAnswers.splice(correctAnswerIndex, 0, correct_answer);

      return allAnswers.map(answer => {
        return (
          <button key={answer} onClick={() => handleClick(answer)}>
            {answer}
          </button>
        );
      });
    };

    return (
      <div>
        <h3>{question}</h3>
        {renderRandomOrder()}
      </div>
    );
  }
}
