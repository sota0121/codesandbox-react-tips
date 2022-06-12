import React from "react";
import styled from "styled-components";

export const StyledComponents = (props) => {
  return (
    <Container>
      <h2>-- Styled Components --</h2>
      <button>sample button</button>
    </Container>
  );
};

const Container = styled.div`
  border: solid 2px #392eff;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
