import React from "react";
import axios from "axios";
import ScoreContainer from "./components/ScoreContainer"

const App = () => {
  return (
    <div>
      Bowling Score Card Tracker
      <Scorecard />
    </div>
  );
};

export default App;