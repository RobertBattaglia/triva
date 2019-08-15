import React, { Component } from "react";

import axios from "axios";
import styled from "styled-components";

import { GlobalStyle, Button } from "./styles";
import Header from "./components/Header";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";
import NumberSelect from "./components/NumberSelect";
import StartGameButton from "./components/StartGameButton";
import QuitGameButton from "./components/QuitGameButton";
import GameBoard from "./components/GameBoard";
import Scoreboard from "./components/Scoreboard";

const GameNotInProgress = styled.div`
  text-align: center;
`;

const GameInProgress = styled.div`
  text-align: center;
`;

const initState = {
  gameInProgress: false,
  currentQuestion: 1,
  questionAnswered: false,
  number: 5,
  category: 9,
  difficulty: "easy",
  questions: [],
  score: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState, darkMode: false };
    this.setCategory = this.setCategory.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.setDarkMode = this.setDarkMode.bind(this);
    this.startGame = this.startGame.bind(this);
    this.quitGame = this.quitGame.bind(this);
    this.checkQuestion = this.checkQuestion.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
  }

  setNumber(value) {
    this.setState({ number: value });
  }

  setCategory(value) {
    this.setState({ category: value });
  }

  setDifficulty(value) {
    this.setState({ difficulty: value });
  }

  setDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  startGame() {
    const { number, category, difficulty } = this.state;
    axios
      .get(
        `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
      )
      .then(({ data }) => {
        this.setState({ questions: data.results, gameInProgress: true });
      })
      .catch(err => {
        console.error(err);
      });
  }

  quitGame() {
    const darkMode = this.state.darkMode;
    this.setState({ ...initState, darkMode });
  }

  checkQuestion(val) {
    let score = this.state.score;
    if (val === this.state.questions[0].correct_answer) {
      score++;
    }
    this.setState({ score, questionAnswered: true });
  }

  goToNextQuestion() {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    const questions = this.state.questions.slice();
    questions.shift();
    this.setState({ questions, questionAnswered: false });
  }

  render() {
    const {
      setNumber,
      setCategory,
      setDifficulty,
      setDarkMode,
      startGame,
      quitGame,
      checkQuestion,
      goToNextQuestion
    } = this;
    const {
      gameInProgress,
      currentQuestion,
      questionAnswered,
      number,
      questions,
      score,
      darkMode
    } = this.state;

    const renderGameInProgress = () => {
      return !gameInProgress ? (
        <GameNotInProgress>
          <NumberSelect darkMode={darkMode} handleSetNumber={setNumber} />
          <CategorySelect darkMode={darkMode} handleSetCategory={setCategory} />
          <DifficultySelect
            darkMode={darkMode}
            handleSetDifficulty={setDifficulty}
          />
          <StartGameButton darkMode={darkMode} handleStartGame={startGame} />
        </GameNotInProgress>
      ) : questions.length ? (
        <GameInProgress>
          <GameBoard
            darkMode={darkMode}
            currentQuestion={currentQuestion}
            number={number}
            score={score}
            question={questions[0]}
            handleCheckQuestion={checkQuestion}
          />
          {questionAnswered ? (
            <Button darkMode={darkMode} onClick={goToNextQuestion}>
              Next Question
            </Button>
          ) : (
            <QuitGameButton
              darkMode={darkMode}
              word={"Quit Game"}
              handleQuitGame={quitGame}
            />
          )}
        </GameInProgress>
      ) : (
        <GameInProgress>
          <Scoreboard number={number} score={score} />
          <QuitGameButton
            darkMode={darkMode}
            word={"Play Again"}
            handleQuitGame={quitGame}
          />
        </GameInProgress>
      );
    };

    return (
      <React.Fragment>
        <GlobalStyle darkMode={darkMode} />
        <Header handleSetDarkMode={setDarkMode} />
        {renderGameInProgress()}
      </React.Fragment>
    );
  }
}

export default App;
