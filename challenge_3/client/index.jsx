import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import ScoreCardArea from "./components/ScoreCardArea";

const App = function() {
  return (
    <div>
      Welcome to the Bowling Score Card App
      <ScoreCardArea />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
