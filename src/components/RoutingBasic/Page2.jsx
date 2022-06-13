import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export const Page2 = (props) => {
  // unused
  const urlParamRef = useRef("");

  const [param, setParam] = useState("");
  const handleChange = (e) => {
    const newText = e.target.value;
    setParam(newText);
  };

  return (
    <>
      <h2>Page2</h2>
      <Link to={`/page2/${param}`}>
        <button>Go to URL Param page</button>
      </Link>
      <br />
      <input
        onChange={handleChange}
        placeholder="url-param"
        ref={urlParamRef}
      />
      <Outlet />
    </>
  );
};
