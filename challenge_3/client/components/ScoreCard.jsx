import React from 'react';

const ScoreCard = ({ scores }) => {
  const headers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  let totalScore = scores.reduce((total, item) => {
    return item ? total + parseInt(item) : total;
  }, 0);
  let subTotal = [];

  for (let i = 0; i < scores.length; i++) {
    let sum;
    if (i % 2 === 1) {
      if (scores[i] === null) {
        sum = null;
      } else {
        sum = parseInt(scores) + parseInt(scores[i - 1]);
        if (i / 2 > 1) {
          sum = sum + subTotal[subTotal.length - 1];
        }
      }
      subTotal.push(sum);
    }
  }

  return (
    <div>
      <table border="1">
      <thead>
          <tr>
            {headers.map((header, index) => (
              <th colSpan="2" key={`header${index}`}>
                {header}
              </th>
            ))}
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {scores.map((score, index) => (
              <td
                key={`score-${index}`}
                style={{
                  width: "48px",
                  height: "48px",
                  textAlign: "center",
                  verticalAlign: "center"
                }}
              >
                {score === 30 ? "X" : score === 10 ? "/" : score}
              </td>
            ))}
            <td
              style={{
                textAlign: "center",
                verticalAlign: "center"
                width: "48px",
                height: "48px",
              }}
            >
              {total}
            </td>
          </tr>
          <tr>
            {subtotal.map((score, index) => (
              <td
                key={`subtotal-${index}`}
                colSpan="2"
                style={{
                  textAlign: "center",
                  verticalAlign: "center",
                  height: "60px"
                }}
              >
                {score}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};