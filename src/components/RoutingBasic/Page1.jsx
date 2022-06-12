import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export const Page1 = (props) => {
  return (
    <>
      <h2>Page1</h2>
      <Link to="/page1/a">Page1a</Link>
      <br />
      <Link to="/page1/b">Page1b</Link>
      <br />
    </>
  );
};
