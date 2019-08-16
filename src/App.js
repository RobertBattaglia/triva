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
  // Game Settings
  number: 5,
  category: 9,
  difficulty: "easy",
  // Game State
  gameInProgress: false,
  score: 0,
  questions: [],
  // Question State
  currentQuestion: null,
  currentQuestionIndex: 0,
  questionAnswered: false,
  answeredIndex: null,
  correctAnswerIndex: null
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initState, darkMode: false };
    this.setDarkMode = this.setDarkMode.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.startGame = this.startGame.bind(this);
    this.quitGame = this.quitGame.bind(this);
    this.goToNextQuestion = this.goToNextQuestion.bind(this);
    this.checkQuestion = this.checkQuestion.bind(this);
  }

  // Global Settings
  setDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  // Game Settings
  setNumber(value) {
    this.setState({ number: value });
  }

  setCategory(value) {
    this.setState({ category: value });
  }

  setDifficulty(value) {
    this.setState({ difficulty: value });
  }

  startGame() {
    const { number, category, difficulty } = this.state;
    axios
      .get(
        `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${difficulty}`
      )
      .then(({ data }) => {
        this.setState(
          { questions: data.results, gameInProgress: true },
          this.goToNextQuestion
        );
      })
      .catch(err => {
        console.error(err);
      });
  }

  quitGame() {
    const darkMode = this.state.darkMode;
    this.setState({ ...initState, darkMode });
  }

  // Game State
  goToNextQuestion() {
    const questions = this.state.questions.slice();
    if (questions.length) {
      const currentQuestion = questions.shift();
      const multiple = currentQuestion.type === "multiple" ? 4 : 2;
      const correctAnswerIndex = Math.floor(Math.random() * multiple);
      let answers = currentQuestion.incorrect_answers.slice();
      answers.splice(correctAnswerIndex, 0, currentQuestion.correct_answer);
      currentQuestion.answers = answers;
      this.setState({
        questions,
        currentQuestion,
        questionAnswered: false,
        correctAnswerIndex
      });
    }
    this.setState({
      currentQuestionIndex: this.state.currentQuestionIndex + 1
    });
  }

  checkQuestion(index) {
    let { score, correctAnswerIndex } = this.state;
    if (index === correctAnswerIndex) {
      score++;
    }
    this.setState({ score, questionAnswered: true });
  }

  render() {
    const {
      setDarkMode,
      setNumber,
      setCategory,
      setDifficulty,
      startGame,
      quitGame,
      goToNextQuestion,
      checkQuestion
    } = this;
    const {
      darkMode,
      number,
      gameInProgress,
      score,
      currentQuestion,
      currentQuestionIndex,
      questionAnswered
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
      ) : currentQuestionIndex > 0 && currentQuestionIndex <= number ? (
        <GameInProgress>
          <GameBoard
            darkMode={darkMode}
            number={number}
            score={score}
            currentQuestion={currentQuestion}
            currentQuestionIndex={currentQuestionIndex}
            handleCheckQuestion={checkQuestion}
            questionAnswered={questionAnswered}
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
