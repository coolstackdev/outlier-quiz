import React from "react";
import styled from 'styled-components'
import StarRatingComponent from 'react-star-rating-component';

const StyledBar = styled.div`
  width: ${props => props.percent}%;
  height: 15px;
  background: #999;
`
 
const QuestionHeader = ({ percent }) => { 
  return (
    <div>
      <h1>Question 16 of 20</h1>
      <p>Entertainment: Board Game</p>
      <StarRatingComponent 
        name="rate1" 
        starCount={5}
        value={3}
      />
    </div>
  );
}
 
export default QuestionHeader;