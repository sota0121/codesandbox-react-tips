import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";

import { Page1a } from "./Page1a";
import { Page1b } from "./Page1b";

export const Page1 = (props) => {
  console.log("Page1");
  return (
    <>
      <h2>Page1</h2>
      <Outlet />
    </>
  );
};
