import React from "react";

const KeyPadItem = function({ item, onKeyPadPress }) {
  const onClick = (event) => {
    onKeyPadPress(event.target.innerHTML);
  };

  return (
    <td
      className="keypad-btn"
      style={{
        width: "100px",
        height: "100px",
        textAlign: "center",
        verticalAlign: "center"
      }}
      onClick={event => onClick(event)}
    >
      {item}
    </td>
  );
};

export default KeyPadItem;
