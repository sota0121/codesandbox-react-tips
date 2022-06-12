import React from "react";
import "./CheckRender.css";

export const ChildArea = (props) => {
  const { open } = props;
  return <>{open ? <p>Child Area</p> : null}</>;
};
