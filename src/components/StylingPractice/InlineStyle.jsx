import React from "react";

export const InlineStyle = (props) => {
  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "8px",
    margin: "8px 0",
    padding: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#aeee00"
  };
  const buttonStyle = {
    borderRadius: "12px",
    margin: "8px",
    padding: "12px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>-- Inline Style --</h2>
      <button style={buttonStyle}>sample button</button>
    </div>
  );
};
