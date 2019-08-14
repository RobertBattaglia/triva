import React, { Component } from "react";
import "./App.css";

import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { questions: [] };
  }

  componentDidMount() {
    this.startGame(10, "general", "easy");
  }

  startGame(qNum, cat, diff) {
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
        </main>
      </div>
    );
  }
}

export default App;
