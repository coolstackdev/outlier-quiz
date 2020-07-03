import React from "react";
import styled from 'styled-components';

const StyledBar = styled.div`
  width: ${props => props.percent}%;
  height: 15px;
  background: #999;
`;

const Topbar = ({ percent }) => { 
  return (
    <StyledBar percent={percent} />
  );
}
 
export default Topbar;