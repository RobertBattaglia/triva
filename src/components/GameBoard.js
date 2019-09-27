import React, { Component } from "react";
import styled from "styled-components";

import { Button } from "../styles";
import Scoreboard from "./Scoreboard";

const H3 = styled.h3`
  font-size: calc(1.5rem + 1vw);
  margin: auto 1rem;
`;

const Questions = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

const Answer = styled(Button)`
  color: #444;
  font-size: calc(1rem + 1.5vw);
  font-family: sans-serif;
  font-weight: 700;
  vertical-align: center;
  width: 49%;
  background: ${props => {
    if (props.questionAnswered && props.index === props.correctAnswerIndex) {
      return "#2ECC40";
    } else if (props.questionAnswered && props.index === props.answeredIndex) {
      return "#FF4136";
    } else {
      return "#fff";
    }
  }};
  padding-top: calc(1rem + 1vw);
  padding-bottom: calc(1rem + 1vw);
  margin-bottom: calc(1rem + 1vw);
  border: solid ${props => (props.darkMode ? "#DDDDDD" : "#111111")} 3px;
  &:hover {
    background: ${props => {
      if (props.questionAnswered && props.index === props.correctAnswerIndex) {
        return "#2ECC40";
      } else if (
        props.questionAnswered &&
        props.index === props.answeredIndex
      ) {
        return "#FF4136";
      } else {
        return "#dddddd";
      }
    }};
    border: solid ${props => (props.darkMode ? "#fff" : "#111111")} 3px;
  }
  @media (max-width: 768px) {
    width: 95%
  }
`;

export default class GameBoard extends Component {
  render() {
    const {
      number,
      score,
      currentQuestionIndex,
      correctAnswerIndex,
      questionAnswered,
      answeredIndex
    } = this.props;
    const { question, answers } = this.props.currentQuestion;

    const handleClick = index => {
      if (!questionAnswered) {
        this.props.handleCheckQuestion(index);
      }
    };

    return (
      <React.Fragment>
        <Scoreboard
          currentQuestionIndex={currentQuestionIndex}
          number={number}
          score={score}
        />
        <H3
          dangerouslySetInnerHTML={{
            __html: currentQuestionIndex + ") " + question
          }}
        />
        <Questions>
          {answers.map((answer, index) => (
            <Answer
              key={answer}
              darkMode={this.props.darkMode}
              index={index}
              correctAnswerIndex={correctAnswerIndex}
              questionAnswered={questionAnswered}
              answeredIndex={answeredIndex}
              onClick={() => handleClick(index)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </Questions>
      </React.Fragment>
    );
  }
}
