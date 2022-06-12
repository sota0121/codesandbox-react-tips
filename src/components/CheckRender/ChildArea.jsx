import React, { memo } from "react";
import "./CheckRender.css";

const style = {
  display: "flex", // flex styled
  justifyContent: "center", // horizontal center
  alignItems: "center", // vertical center
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo
// if though parent re-rendering, this component isn't rendered
// this component is rendered only when props / state is updated.
export const ChildArea = memo((props) => {
  const { open } = props;
  console.log("ChildArea is rendered !");

  const heavyData = [...Array(200).keys()];
  heavyData.forEach(() => {
    console.log("...");
  });
  return <>{open ? <p style={style}>Child Area (Heavy Component)</p> : null}</>;
});
