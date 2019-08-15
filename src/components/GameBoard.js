import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "../styles";
import Scoreboard from "./Scoreboard";

const H3 = styled.h3`
  font-size: 3rem;
`;

const Questions = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Answer = styled(Button)`
  width: 49%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin-bottom: 3rem;
`;

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
          <Answer
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
        <H3 dangerouslySetInnerHTML={{ __html: question }} />
        <Questions>{renderRandomOrder()}</Questions>
      </React.Fragment>
    );
  }
}
