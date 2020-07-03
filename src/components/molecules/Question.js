import React from 'react';
import styled from 'styled-components';
import Topbar from '../atoms/Topbar';
import QuestionHeader from '../atoms/QuestionHeader';
import QuestionBody from '../atoms/QuestionBody';
import QuestionFooter from '../atoms/QuestionFooter';

const Wrapper = styled.div`
  width: 700px;
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
  padding: 50px 60px;
`;

const FooterWrapper = styled.div`
    position: absolute;
    width: calc(100% - 120px);
    left: 60px;
    bottom: 30px;
`;

const Question = ({ question, curIndex, correctNumber, totalNum, setResult, moveNext }) => {

  const curPercent = (curIndex + 1) * 100 / totalNum;
  question.incorrect_answers.push(question.correct_answer);

  const clickAnswer = (result) => {
    setResult(result);
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
          correctAnswer={question.correct_answer}
          moveNext={moveNext}
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