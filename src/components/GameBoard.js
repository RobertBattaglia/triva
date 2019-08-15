import React, { Component } from "react";
import { Button } from "../styles";

import Scoreboard from "./Scoreboard";
export default class GameBoard extends Component {
  render() {
    const { score } = this.props;
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
          <Button
            key={answer}
            onClick={() => handleClick(answer)}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        );
      });
    };

    return (
      <React.Fragment>
        <Scoreboard score={score} />
        <h3 dangerouslySetInnerHTML={{ __html: question }} />
        {renderRandomOrder()}
      </React.Fragment>
    );
  }
}
