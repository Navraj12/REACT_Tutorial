import { useState } from "react";
import "./App.css";
// import { useEffect } from "react";
function App() {
  // console.log("App rendered", Math.random());
  const [value, setValue] = useState({
    value: 0,
  });

  // const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value.value * 5;

  const multiplybyfive = () => {
    // Update the 'value' property inside the state object
    setValue((prevValue) => ({
      value: prevValue.value + 1,
    }));
  };

  // const clickMe = () => {
  //   setValue({
  //     value: 0,
  //   });
  // };

  return (
    <>
      <h1>Main value: {value.value} </h1>
      <button onClick={multiplybyfive}>click to multiply by 5</button>
      <h2>Multiplied value: {multipliedValue} </h2>
    </>
  );
}

export default App;
