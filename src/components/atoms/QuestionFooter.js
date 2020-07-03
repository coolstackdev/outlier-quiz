import React from "react";
import styled from 'styled-components';

const StatusContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 7px;
  overflow: hidden;
`;

const CorrectBar = styled.div`
  background: black;
  width: ${props => props.percent}%;
`;

const AnsweredBar = styled.div`
  background: #555;
  width: ${props => props.percent}%;
`;

const CurrentBar = styled.div`
  background: #aaa;
  width: ${props => props.percent}%;
`;

const QuestionHeader = ({ correct, current, total }) => {
  const correctPercent = correct * 100 / total;
  const answeredPercent = (current - 1) * 100 / total - correctPercent;
  const currentPercent = 100 / total;
  const maxScore = current * 100 / total;

  return (
    <div>
      <StatusContainer>
        <span>Score: { correctPercent }%</span>
        <span>Max Score: { maxScore }%</span>
      </StatusContainer>
      <ProgressBar>
        <CorrectBar percent={correctPercent} />
        <AnsweredBar percent={answeredPercent} />
        <CurrentBar percent={currentPercent} />
      </ProgressBar>
    </div>
  );
}
 
export default QuestionHeader;