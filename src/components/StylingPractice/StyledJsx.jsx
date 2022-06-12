import React from "react";

export const StyledJsx = (props) => {
  return (
    <>
      <div>
        <h2>-- Styled JSX --</h2>
        <button>sample button</button>
      </div>
      <style jsx="true">{``}</style>
    </>
  );
};
