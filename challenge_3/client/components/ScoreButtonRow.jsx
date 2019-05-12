import React from "react";
import ScoreButton from "./ScoreButton";

const ScoreButtonRow = ({ row, onKeyPadPress }) => {
  return (
    <tr>
      {row.map(item => (
        <ScoreButton
          item={item}
          onKeyPadPress={onKeyPadPress}
          key={`item${item}`}
        />
      ))}
    </tr>
  );
};

export default ScoreButtonRow;
