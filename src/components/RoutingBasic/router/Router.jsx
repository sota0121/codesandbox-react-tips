import { Routes, Route, useRoutes } from "react-router-dom";

import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page2 } from "../Page2";
import { Page1a } from "../Page1a";
import { Page1b } from "../Page1b";
import { NotFound } from "../NotFound";

// See for useRoutes
// https://reactrouter.com/docs/en/v6/hooks/use-routes
// ---
// See also this site
// Official doc is not enough to understand useRoutes
// https://qiita.com/jonakp/items/ce5cab870e9ccd58b46c

export const Router = (props) => {
  const routerElement = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "page1",
      element: <Page1 />,
      children: [
        { path: "a", element: <Page1a /> },
        { path: "b", element: <Page1b /> }
      ]
    },
    {
      path: "page2",
      element: <Page2 />
    },
    { path: "*", element: <NotFound /> }
  ]);
  return routerElement;
};
