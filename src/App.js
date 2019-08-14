import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";
import NumberSelect from "./components/NumberSelect";
import StartGameButton from "./components/StartGameButton";
import QuitGameButton from "./components/QuitGameButton";
import GameBoard from "./components/GameBoard";

const initState = {
  gameInProgress: false,
  number: 5,
  category: 9,
  difficulty: "easy",
  questions: []
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

  render() {
    const renderGameInProgress = () => {
      return !this.state.gameInProgress ? (
        <React.Fragment>
          <NumberSelect handleSetNumber={this.setNumber} />
          <CategorySelect handleSetCategory={this.setCategory} />
          <DifficultySelect handleSetDifficulty={this.setDifficulty} />
          <StartGameButton handleStartGame={this.startGame} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <QuitGameButton handleQuitGame={this.quitGame} />
          <GameBoard question={this.state.questions[0]} />
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
