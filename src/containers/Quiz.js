import React, { useState, useEffect } from 'react';
import Question from '../components/molecules/Question';

const Quiz = ({ data }) => {

  const totalNum = data.length;

  const [curIndex, setCurIndex] = useState(0);
  const [curQuestion, setCurQuestion] = useState(data[0]);
  const [correctNumber, setCorrectNumber] = useState(0);

  useEffect(() => {
    setCurQuestion(data[curIndex]);
  }, [curIndex, data]);

  const setResult = (result) => {
    if (result) setCorrectNumber(correctNumber + 1);
  }

  const moveNext = () => {
    if (curIndex === totalNum - 1)
      return;

    setCurIndex(curIndex + 1);
  }

  return (
    <Question
      question={curQuestion}
      curIndex={curIndex}
      correctNumber={correctNumber}
      totalNum={totalNum}
      setResult={setResult}
      moveNext={moveNext}
    />
  )
}

export default Quiz;