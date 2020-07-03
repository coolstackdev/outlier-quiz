import React from "react";
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
 
const QuestionBody = ({ content, answers, onAnswerClick, isAnswered, isCorrect, moveNext }) => {
  const shuffledAnswers = _.shuffle(answers);

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
                onClick={() => onAnswerClick(answer)}
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
              <Button title="Next Question" isLarge={true} onClick={() => moveNext} />
            </>
          )
        }
        {
          isAnswered && !isCorrect && (
            <>
              <h1>Sorry!</h1>
              <Button title="Next Question" isLarge={true} onClick={() => moveNext} />
            </>
          )
        }
      </ResultWrapper>
    </Wrapper>
  );
}
 
export default QuestionBody;