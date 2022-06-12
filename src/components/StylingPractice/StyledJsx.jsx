import React from "react";

export const StyledJsx = (props) => {
  // ===============================
  // Note: Styled JSX
  // - at default, we can't use pseudo element (e.g. button:hover)
  // - if you'd like to use it, add third party extension
  // - >> e.g.:
  // ===============================
  return (
    <>
      <div className="container">
        <h2 className="title">-- Styled JSX --</h2>
        <button className="button">sample button</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 8px;
          margin: 8px 0;
          padding: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .title {
          margin: 0;
          color: #aeee00;
        }

        .button {
          border-radius: 12px;
          margin: 8px;
          padding: 12px;
        }
      `}</style>
    </>
  );
};
