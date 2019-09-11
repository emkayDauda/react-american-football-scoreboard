//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [lionScore, setLionScore] = useState(0);
  const [tigerScore, setTigerScore] = useState(0);

  function moreWinzzz(teamName, upScore) {
    teamName === "Lions" ? setLionScore(lionScore + upScore) :
    setTigerScore(tigerScore + upScore)
  }

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={lionScore} awayScore={tigerScore}/>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => moreWinzzz("Lions", 7)}
          >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => moreWinzzz("Lions", 3)}
          >Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => moreWinzzz("Tigers", 7)}
          >Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => moreWinzzz("Tigers", 3)}
          >Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

function TopRow(props){
  return (
    <div className="topRow">
          <Team teamName="Lions" teamScore={props.homeScore} teamParty="home"/>
          <div className="timer">00:03</div>
          <Team teamName="Tigers" teamScore={props.awayScore} teamParty="away"/>         
        </div>
  )
}

function Team(props){
  return (
    <div className={props.teamParty}>
            <h2 className="home__name">{props.teamName}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{props.teamScore}</div>
          </div>
  )
}

export default App;
