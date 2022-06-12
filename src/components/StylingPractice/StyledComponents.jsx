import React from "react";
import styled from "styled-components";

// ====================================
// NOTE
// - StyledComponents fully supports `scss`
// - So, you can use pseudo element (e.g. &:hover)
// ====================================

export const StyledComponents = (props) => {
  return (
    <StyleContainer>
      <StyleTitle>-- Styled Components --</StyleTitle>
      <StyleButton>sample button</StyleButton>
    </StyleContainer>
  );
};

// Recommend to name the styled component
// so that you can understand this is a just styling component
// e.g. SXxxx / StyleXxxx / XxxxStyle ... and so on.
const StyleContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyleTitle = styled.h2`
  margin: 0;
  color: #aeee00;
`;

const StyleButton = styled.button`
  border-radius: 12px;
  margin: 8px;
  padding: 12px;
  &:hover {
    background-color: #331155;
    color: #dddddd;
    font-weight: bold;
  }
`;
