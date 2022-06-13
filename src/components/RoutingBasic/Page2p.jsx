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
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <>
      <h4>Page2p</h4>
      <p>URL Paramerter is {id}</p>
      <p>Query Parameter is {query.get("name")}</p>
    </>
  );
};
