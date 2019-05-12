import React from "react";
import ScoreButtonRow from "./ScoreButtonRow";

const ScoreSelector = function({ onKeyPadPress }) {
  const keyPadValues = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["Spare", 0, "Strike"]];

  return (
    <div id="keypad">
      <table border="1">
        <tbody>
          {keyPadValues.map((row, index) => (
            <ScoreButtonRow
              row={row}
              key={`row${index}`}
              onKeyPadPress={onKeyPadPress}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreSelector;
