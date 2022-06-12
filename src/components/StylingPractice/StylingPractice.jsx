import React from "react";

import { InlineStyle } from "./InlineStyle";
import { CssModules } from "./CssModules";
import { StyledJsx } from "./StyledJsx";
import { StyledComponents } from "./StyledComponents";

export const StylingPractice = (props) => {
  return (
    <>
      <h2>StylingPractice</h2>
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </>
  );
};
