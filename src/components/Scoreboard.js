import React from "react";
import styled from "styled-components";

const ScoreParagraph = styled.p`
  margin: 2rem auto;
  font-size: 3rem;
`;

const RecentParagraph = styled.p`
  margin: 1rem auto;
  font-size: 2rem;
`;

const Scores = styled.ul`
  list-style-type: none;
  margin: 1rem auto;
  font-size: 1.5rem;
`;

export default function Scoreboard(props) {
  return (
    <React.Fragment>
      <ScoreParagraph>Score: {props.score + "/" + props.number}</ScoreParagraph>
      {props.currentQuestionIndex > props.number ? (
        <React.Fragment>
          <RecentParagraph>Recent Scores:</RecentParagraph>
          <Scores>
            {Object.keys(localStorage)
              .sort((x, y) => (parseInt(x) > parseInt(y) ? -1 : 1))
              .slice(0, 5)
              .map(key => (
                <li key={key}>{localStorage.getItem(key)}</li>
              ))}
          </Scores>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
}
