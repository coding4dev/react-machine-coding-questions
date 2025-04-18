import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <div>
        <button onClick={handleIncrement}>+1</button>
        <button onClick={handleDecrement}>-1</button>
      </div>
    </div>
  );
};

export default App;
