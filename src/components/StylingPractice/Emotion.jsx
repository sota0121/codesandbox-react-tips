import React from "react";
// to avoid error add following
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

export const Emotion = (props) => {
  // as scss (seems like styled-components)
  const containerStyle = css`
    border: solid 2px #392eff;
    border-radius: 8px;
    margin: 8px 0;
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;
  // seems like inlineStyle
  const titleStyle = css({
    margin: "0",
    color: "#aeee00"
  });

  return (
    <div css={containerStyle}>
      <h2 css={titleStyle}>-- Emotion --</h2>
      <StyleButton>sample button</StyleButton>
    </div>
  );
};

// seems like styled-components
const StyleButton = styled.button`
  border-radius: 12px;
  margin: 8px;
  padding: 12px;
  &:hover {
    background-color: #331155;
    color: #dddddd;
    font-weight: bold;
    cursor: pointer;
  }
`;
