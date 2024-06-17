import { useState } from "react";
import "./App.css";
function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 14;
  const addvalue = () => {
    // console.log("value added", Math.random());
    console.log("clicked", counter);
    counter = counter + 1;
    setCounter(counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Hello It's me your father</h1>
      <h2>counter value: 5</h2>
      <button onClick={addvalue}>Add Value {counter} </button>
      <br />
      <button onClick={removeValue}>Decrease Value {counter} </button>
      <p>footer: {counter} </p>
    </>
  );
}

export default App;
