  import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';

const QuestionTitle = styled.h1`
  color: #555;
  line-height: 100%;
  margin: 0;
`;

const QuestionCategory = styled.p`
  color: #777;
  line-height: 100%;
  font-size: 13px;
  margin: 15px 0 3px 0;
`;
 
const QuestionHeader = ({ current, total, category, difficulty }) => {
  const [rating, setRating] = useState(1);

  useEffect(() => {
    switch(difficulty) {
      case 'easy':
        setRating(1);
        break;
      case 'medium':
        setRating(2);
        break;
      case 'hard':
        setRating(3);
        break;
      default:
        break;
    }
  }, [difficulty])
  

  return (
    <div>
      <QuestionTitle>Question { current } of { total }</QuestionTitle>
      <QuestionCategory>{ unescape(category) }</QuestionCategory>
      <StarRatingComponent 
        name="rate" 
        starCount={5}
        value={rating}
        starColor="#333"
        emptyStarColor="#999"
      />
    </div>
  );
}
 
export default QuestionHeader;