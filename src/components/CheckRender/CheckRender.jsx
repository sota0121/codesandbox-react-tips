import React, { useRef, useState } from "react";
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
    openRef.current = !openRef;
    console.log("(onClickOpen) open is ", open);
    console.log("(onClickOpen) openRef is ", openRef.current);
  };

  return (
    <div>
      <h2>CheckRender</h2>
      <input onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>Toggle Child Area</button>
      <ChildArea open={open} />
    </div>
  );
};
