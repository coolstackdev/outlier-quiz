import React, { useState } from 'react';
import styled from 'styled-components';
import Topbar from '../atoms/Topbar';
import QuestionHeader from '../atoms/QuestionHeader';
import QuestionBody from '../atoms/QuestionBody';
import QuestionFooter from '../atoms/QuestionFooter';

const Wrapper = styled.div`
  width: 600px;
  height: 800px;
  margin: 100px auto;
  background: white;
  box-shadow: 3px 3px 3px 3px grey;
  background: white;
  position: relative;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
`;

const FooterWrapper = styled.div`
    position: absolute;
    width: calc(100% - 200px);
    left: 100px;
    bottom: 30px;
`;

const Question = ({ question, curIndex, correctNumber, totalNum, setResult, moveNext }) => {
  
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const curPercent = (curIndex + 1) * 100 / totalNum;
  question.incorrect_answers.push(question.correct_answer);

  const clickAnswer = (answer) => {
    if (answer === question.correct_answer){
      setIsCorrect(true);
      setResult(true);
    } else {
      setIsCorrect(false);
      setResult(false);
    }

    setIsAnswered(true);
  }

  return (
    <Wrapper>
      <Topbar percent={curPercent} />
      <Main>
        <QuestionHeader
          current={curIndex + 1}
          total={totalNum}
          category={question.category}
          difficulty={question.difficulty}
        />
        <QuestionBody
          content={question.question}
          answers={question.incorrect_answers}
          onAnswerClick={clickAnswer}
          isAnswered={isAnswered}
          isCorrect={isCorrect}
          moveNext={() => moveNext}
        />
      </Main>
      <FooterWrapper>
        <QuestionFooter
          correct={correctNumber}
          current={curIndex + 1}
          total={totalNum}
        />
      </FooterWrapper>
    </Wrapper>
  )
}

export default Question;