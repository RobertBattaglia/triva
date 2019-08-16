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
  margin-left: 10%;
  margin-right: 10%;
  width: 80%;
`;

const Answer = styled(Button)`
  color: #444;
  font-size: 2.5rem;
  font-family: sans-serif;
  font-weight: 700;
  width: 49%;
  background: #fff;
  padding-top: 3rem;
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;
  border: solid ${props => (props.darkMode ? "#DDDDDD" : "#111111")} 3px;
  &:hover {
    background: #dddddd;
    border: solid ${props => (props.darkMode ? "#fff" : "#111111")} 3px;
  }
`;

export default class GameBoard extends Component {
  render() {
    const {
      number,
      score,
      currentQuestionIndex,
      questionAnswered
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
              onClick={() => handleClick(index)}
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </Questions>
      </React.Fragment>
    );
  }
}
