import "./styles.css";

import { CheckRender } from "./components/CheckRender/CheckRender";
import { StylingPractice } from "./components/StylingPractice/StylingPractice";

const hrStyle = {
  width: "100%",
  height: "1px",
  margin: "12px 0px",
  backgroundColor: "grey",
  borderColor: "grey"
};

export default function App() {
  return (
    <div className="App">
      <h1>React Tips</h1>
      <hr style={hrStyle} />
      <CheckRender />
      <hr style={hrStyle} />
      <StylingPractice />
    </div>
  );
}
