import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";
import { Page1a } from "./Page1a";
import { Page1b } from "./Page1b";

// ======================================
// See v6 tutorial
// https://reactrouter.com/docs/en/v6/getting-started/tutorial
// ======================================

export const RoutingBasic = (props) => {
  return (
    <>
      <BrowserRouter>
        <h2>Routing Basic</h2>
        {/* Navigation */}
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }}
        >
          <Link to="/">Home</Link>
          <br />
          <Link to="/page1">Page1</Link>
          <br />
          <Link to="/page2">Page2</Link>
        </nav>
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
