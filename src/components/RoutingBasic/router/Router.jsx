import { Routes, Route } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1a } from "../Page1a";
import { Page1b } from "../Page1b";

export const Router = (props) => {
  return (
    <>
      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />}>
          <Route path="a" element={<Page1a />} />
          <Route path="b" element={<Page1b />} />
        </Route>
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </>
  );
};
