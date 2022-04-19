import { useState } from "react";
import "./App.css";
import { Timer } from "./components/Timer";
function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  var s;
  var d;
  function initial(e) {
    setStart(+(e.target.value));
  }
  const ending = (e) => {
    setEnd(+(e.target.value));
  };

  return (
    <div>
      <input
        onChange={initial}
        type="text"
        placeholder="Enter starting value"
        id="initial"
      />
      <input
        onChange={ending}
        type="text"
        placeholder="Enter ending value"
        id="ending"
      />
      {/* <div>{start}</div>
      <div>{end}</div> */}
      <Timer starts={start} ends={end} />
    </div>
  );
}

export default App;
