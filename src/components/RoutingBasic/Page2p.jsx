import { useParams, useLocation } from "react-router-dom";

export const Page2p = (props) => {
  const { id } = useParams();
  // ----------------
  // location has attrs following
  // -> pathname: String
  // -> state: Any
  // -> hash: String
  // -> search: String <-- QueryParam
  // ... etc
  // ----------------
  const location = useLocation();
  const { search, state } = location;
  const query = new URLSearchParams(search);
  const nameParam = query.get("name");
  console.log("location: ", location);
  console.log("state: ", state);

  return (
    <>
      <h4>Page2p</h4>
      {id !== "" ? <p>URL Paramerter is {id}</p> : null}
      {nameParam !== "" ? <p>Query Parameter is {nameParam}</p> : null}
      {state !== "" ? <p>State is {state}</p> : null}
    </>
  );
};
