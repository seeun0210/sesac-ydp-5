import React from 'react';
import styled from 'styled-components';

//CSS in JS: js안에 css를 작성함
// styled-components, emotion, styled-jsx, ...
const StyledContainer = styled.div`
  display: flex;
`;
const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.bgColor || 'blue'};
  &:hover {
    transform: translateY(-20px);
  }
`;

export default function StyledComponent() {
  return (
    <StyledContainer>
      <StyledBox bgColor="red"></StyledBox>
      <StyledBox bgColor="orange"></StyledBox>
      <StyledBox bgColor="yellow"></StyledBox>
      <StyledBox></StyledBox>
    </StyledContainer>
  );
}
