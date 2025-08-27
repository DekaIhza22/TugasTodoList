import { useState } from "react";

const CounterTest = () => {
  // state awal = 0
  const [counter, setCounter] = useState<number>(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "50px",
      }}
    >
      <h1>Counter: {counter}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setCounter(counter - 1)}>-</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterTest;
