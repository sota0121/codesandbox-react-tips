import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export const Page2 = (props) => {
  // unused
  const urlParamRef = useRef("");

  const [urlParam, setUrlParam] = useState("");
  const handleChangeUrl = (e) => {
    const newText = e.target.value;
    setUrlParam(newText);
  };

  const [queryParam, setQueryParam] = useState("");
  const handleChangeQuery = (e) => {
    const newText = e.target.value;
    setQueryParam(newText);
  };

  return (
    <>
      <h2>Page2</h2>
      <Link to={`/page2/${urlParam}`}>
        <button>Go to URL Param page</button>
      </Link>
      <br />
      <input
        style={{ margin: "6px" }}
        onChange={handleChangeUrl}
        placeholder="url-param"
        ref={urlParamRef}
      />
      <br />
      <Link to={`/page2/${urlParam}?name=${queryParam}`}>
        <button>Go to Query Param page</button>
      </Link>
      <br />
      <input
        style={{ margin: "6px" }}
        onChange={handleChangeQuery}
        placeholder="query-param"
      />
      <Outlet />
    </>
  );
};
