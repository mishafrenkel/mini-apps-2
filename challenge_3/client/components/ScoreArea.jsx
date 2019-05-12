import React, { useState, useEffect } from "react";
import ScoreCard from "./ScoreCard";
import ScoreSelector from "./ScoreSelector";

const ScoreArea = (props) => {
  let [players, setPlayers] = useState(0);
  let [scoreCard, setScoreCard] = useState(0);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [message, setMessage] = useState('Click to input the number of pins knocked down. When you get a spare (knock down all 10) select "spare"');
  
  let [scores, setScores] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ]);

  const insertIntoScore = (origNum, newNum) => {
    if (currentIndex >= 20) {
      setMessage("Sorry cannot add to score. Game is over. Please start again.");
      return;
    }

    let hasNewNum = newNum !== undefined;
    let index = hasNewNum && currentIndex ? currentIndex + 1 : currentIndex;
    let insert = hasNewNum ? [newNum, origNum] : [orignNum];
    let slice1 = scores.slice(0, currentIndex);
    let slice = ((currentIndex && hasNewNum) || !hasNewNum) 
      ? scores.slice(index + 1) : scores.slice(index + 2);
    
    let updatedScores = [...slice1, ...insert, ...slice2];
    setScores(updatedScores);
    setCurrentIndex(hasNewNum ? currentIndex + 2 : currentIndex + 1);
  };

  const onKeyPadPress = (input) => {
    if (input === 'Strike') {
      currentIndex % 2 === 0 
        ? insertIntoScore(30, 0) 
        : setMessage('Invalid Entry: Cannot strike on the 2nd bowl');
    } else if (input === 'Spare') {
      currentIndex % 2 === 1
      ? insertIntoScore(10)
      : setMessage('Invalid Entry: Cannot spare on a first attempt. Did you mean to select a strike?');
    } else {
      currentIndex % 2 === 1 && 
      (Number(input) + Number(scores[currentIndex - 1]) > 9)
        ? setMessate('Invalid entry: Score cannot be above 9 on a second attempt. Did you mean to select a spare?')
        : insertIntoScore(input);
    }
  };

  useEffect(() => {
    setMessage('');
  }, [scores]);

  return (
    <div>
      <div>
        <ScoreCard scores={scores} />
      </div>
      <div>
        <br />
        <ScoreSelector onKeyPadPress={onKeyPadPress} />
        <div id="message"> {message} </div>
      </div>
    </div>
  );

};

export default ScoreArea; 

