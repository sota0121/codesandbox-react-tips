import { useParams } from "react-router-dom";

export const Page2p = (props) => {
  const { id } = useParams();
  return (
    <>
      <h4>Page2p</h4>
      <p>Paramerter is {id}</p>
    </>
  );
};
