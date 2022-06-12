import React from "react";
import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>-- CSS Modules --</h2>
      <button className={classes.button}>sample button</button>
    </div>
  );
};
