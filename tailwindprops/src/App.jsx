import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "Navraj",
    age: 23,
  };
  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card username="ntrvlog" btnText="click me" />
      <Card username="mywife's vlog" btnText="visit me" />
    </>
  );
}

export default App;
