import React from "react";
import "./CheckRender.css";

const style = {
  display: "flex", // flex styled
  justifyContent: "center", // horizontal center
  alignItems: "center", // vertical center
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = (props) => {
  const { open } = props;
  return <>{open ? <p style={style}>Child Area</p> : null}</>;
};
