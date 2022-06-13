import { Outlet, useNavigate } from "react-router-dom";

import { Page1a } from "./Page1a";
import { Page1b } from "./Page1b";

// See: what change on react-router-dom from v5 to v6 ?
// https://dev.classmethod.jp/articles/react-router-5to6/
// ---
// 1. useHistory --> useNavigate

export const Page1 = (props) => {
  console.log("Page1");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page1/a");
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h2>Page1</h2>
      <br />
      <button style={{ margin: "8px" }} onClick={handleClick}>
        Go to Page1a
      </button>
      <br />
      <button onClick={handleClickBack}>Go back</button>
      <Outlet />
    </>
  );
};
