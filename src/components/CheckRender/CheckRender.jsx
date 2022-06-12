import React, { useCallback, useMemo, useRef, useState } from "react";
import "./CheckRender.css";

import { ChildArea } from "./ChildArea";

export const CheckRender = (props) => {
  // state
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);

  const stateMsg = `(main) open is ${open}\n(main) openRef is ${openRef.current}`;
  console.log(stateMsg);

  // handler
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickOpen = () => {
    setOpen(!open);
    openRef.current = !openRef.current;
    console.log("(onClickOpen) open is ", open);
    console.log("(onClickOpen) openRef is ", openRef.current);
  };

  // ======================================
  // NOTE:
  // Create new this arrow function each time the screen is rendered
  // So, ChildArea.props.onClickClose is updated each time onChange is called
  // -- Bad Code is following --
  // const onClickClose = () => {
  //   setOpen(false);
  // };
  // -- Good Code is following --
  // memorize function that gived to child component
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, [setOpen]); // watch setOpen function
  // ======================================

  // NOTE:
  // memorize variables by useMemo
  // useMemo is effective when the variables are calcurated
  // with heavy computation.
  const temp = useMemo(() => {
    // heavy computation
    const x = [...Array(500).keys()];
    const ret = x.reduce((prev, cur) => prev + cur, 0);
    return ret;
  }, []); // watch no vars means call this only while initializing
  console.log(temp);

  return (
    <div>
      <h2>CheckRender</h2>
      <input onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Toggle Child Area</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
};
