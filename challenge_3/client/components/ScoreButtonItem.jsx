import React from 'react';

const ScoreButtonItem = ({ item, onKeyPadPress }) => {
  const onClick = (event) => {
    onKeyPadPress(e.target.innerHTML);
  };

  return (
    <td
      className="scoreButton"
      style={{
        width: "100px",
        height: "100px",
        textAlign: "center",
        verticalAlign: "center"
      }}
      onClick={e => onClick(e)}
    >
      {item}
    </td>
  );
};

export default ScoreButtonItem; 