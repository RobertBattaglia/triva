import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";
import NumberSelect from "./components/NumberSelect";
import StartGameButton from "./components/StartGameButton";
import QuitGameButton from "./components/QuitGameButton";
import GameBoard from "./components/GameBoard";
import ResultBoard from "./components/ResultBoard";

const initState = {
  gameInProgress: false,
  number: 5,
  category: 9,
  difficulty: "easy",
  questions: [],
  score: 0
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
    this.setCategory = this.setCategory.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.startGame = this.startGame.bind(this);
    this.quitGame = this.quitGame.bind(this);
    this.checkQuestion = this.checkQuestion.bind(this);
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
    this.setState(initState);
  }

  checkQuestion(val) {
    if (val === this.state.questions[0].correct_answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
    const questions = this.state.questions.slice();
    questions.shift();
    this.setState({ questions });
  }

  render() {
    const {
      setNumber,
      setCategory,
      setDifficulty,
      startGame,
      quitGame,
      checkQuestion
    } = this;
    const { gameInProgress, questions, score } = this.state;

    const renderGameInProgress = () => {
      return !gameInProgress ? (
        <React.Fragment>
          <NumberSelect handleSetNumber={setNumber} />
          <CategorySelect handleSetCategory={setCategory} />
          <DifficultySelect handleSetDifficulty={setDifficulty} />
          <StartGameButton handleStartGame={startGame} />
        </React.Fragment>
      ) : questions.length ? (
        <React.Fragment>
          <QuitGameButton word={"Quit Game"} handleQuitGame={quitGame} />
          <GameBoard
            question={questions[0]}
            handleCheckQuestion={checkQuestion}
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <QuitGameButton word={"Play Again"} handleQuitGame={quitGame} />
          <ResultBoard score={score} />
        </React.Fragment>
      );
    };

    return (
      <div className="App">
        <header className="App-header" />
        <main>
          <h1>Trivia</h1>
          {renderGameInProgress()}
        </main>
      </div>
    );
  }
}

export default App;
