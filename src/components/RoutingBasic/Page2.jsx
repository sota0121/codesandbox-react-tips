import { useState, useRef } from "react";
import { Link, Outlet } from "react-router-dom";

export const Page2 = (props) => {
  // unused
  const urlParamRef = useRef("");

  const [pageState, setPageState] = useState("");
  const handleChangePageState = (e) => {
    const newVal = e.target.value;
    setPageState(newVal);
  };
  console.log(pageState);

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
      <Link to={{ pathname: `/page2/${urlParam}`, state: pageState }}>
        <button>Go to URL Param page (with pageState)</button>
      </Link>
      <br />
      <input
        style={{ margin: "6px" }}
        onChange={handleChangePageState}
        placeholder="state for giving to next page"
      />
      <br />
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
      <Link
        to={{
          pathname: `/page2/${urlParam}?name=${queryParam}`,
          state: pageState
        }}
      >
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
