import React, { useState, useEffect, useMemo } from "react";
import _ from 'lodash';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  margin: 10px 0;
`;

const QuestionContent = styled.p`
  font-size: 18px;
  line-height: 100%;
  margin: 30px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & button {
    margin-top: 10px;
  }
`;


const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
 
const QuestionBody = ({ content, answers, onAnswerClick, correctAnswer, moveNext }) => {
  
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');

  useEffect(() => {
    setIsAnswered(false);
  }, [content]);
  
  const shuffledAnswers = useMemo(() => _.shuffle(answers), [answers]);

  const handleAnswer = (answer) => {
    if (isAnswered)
      return;

    setSelectedAnswer(answer);
    
    if (answer === correctAnswer) {
      onAnswerClick(true);
      setIsCorrect(true);
    } else {
      onAnswerClick(false);
      setIsCorrect(false);
    }

    setIsAnswered(true);
  }

  return (
    <Wrapper>
      <QuestionContent>{ unescape(content) }</QuestionContent>
      <ButtonWrapper>
        {
          shuffledAnswers.map((answer, index) => {
            return (
              <Button
                key={index}
                title={unescape(answer)}
                onClick={() => handleAnswer(answer)}
                disabled={isAnswered ? answer !== correctAnswer && answer !== selectedAnswer : false}
                selected={isAnswered ? answer === selectedAnswer : false}
                highlight={isAnswered ? answer === correctAnswer && answer !== selectedAnswer : false}
              />
            )
          })
        }
      </ButtonWrapper>
      <ResultWrapper>
        {
          isAnswered && isCorrect && (
            <>
              <h1>Correct!</h1>
              <Button title="Next Question" isLarge={true} onClick={() => moveNext()} />
            </>
          )
        }
        {
          isAnswered && !isCorrect && (
            <>
              <h1>Sorry!</h1>
              <Button title="Next Question" isLarge={true} onClick={() => moveNext()} />
            </>
          )
        }
      </ResultWrapper>
    </Wrapper>
  );
}
 
export default QuestionBody;