import React from "react";
import axios from "axios";
import ScoreCard from "./components/Scorecard"

const App = () => {
  return (
    <div>
      Bowling Score Card Tracker
      <Scorecard />
    </div>
  );
};

export default App;