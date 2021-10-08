import React, { useState } from "react";
import "./App.css";

const App = ({ value = 10 }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => setCounter(counter + 1)

  const handleReset = () => setCounter(value);

  const handleMinus = () => setCounter(counter - 1);

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+ 1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleMinus}>- 1</button>
    </>
  );
};

export default App;
