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
  console.log("ChildArea is rendered !");

  const heavyData = [...Array(2000).keys()];
  heavyData.forEach(() => {
    console.log("...");
  });
  return <>{open ? <p style={style}>Child Area (Heavy Component)</p> : null}</>;
};
