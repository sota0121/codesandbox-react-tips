import React from "react";
import styled from "styled-components";

export const StyledComponents = (props) => {
  return (
    <StyleContainer>
      <h2>-- Styled Components --</h2>
      <button>sample button</button>
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
