import React, { Component } from "react";
import "./App.css";

import axios from "axios";
import CategorySelect from "./components/CategorySelect";
import DifficultySelect from "./components/DifficultySelect";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { category: 9, difficulty: "easy", questions: [] };
    this.setCategory = this.setCategory.bind(this);
    this.setDifficulty = this.setDifficulty.bind(this);
  }

  componentDidMount() {
    this.startGame(10, "general", "easy");
  }

  setCategory(value) {
    this.setState({ category: value });
  }

  setDifficulty(value) {
    this.setState({ difficulty: value });
  }

  startGame(qNum, category, difficulty) {
    axios
      .get("https://opentdb.com/api.php?amount=10&difficulty=easy")
      .then(({ data }) => {
        this.setState({ questions: data.results });
      })
      .then(() => {
        console.log(this.state);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <main>
          <h1>Trivia</h1>
          <CategorySelect handleSetCategory={this.setCategory} />
          <DifficultySelect handleSetDifficulty={this.setDifficulty} />
        </main>
      </div>
    );
  }
}

export default App;
