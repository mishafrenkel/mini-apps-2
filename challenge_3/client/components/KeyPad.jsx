import React from "react";
import KeyPadRow from "./KeyPadRow";

const KeyPad = function({ onKeyPadPress }) {
  const inputOptions = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ["Spare", 0, "Strike"]];

  return (
    <div id="keypad">
      <table border="1">
        <tbody>
          {inputOptions.map((row, index) => (
            <KeyPadRow
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

export default KeyPad;
