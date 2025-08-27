import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Button from "./assets/Component/Button";
import Button2 from "./assets/Component/Button";
import TodoList from "./pages/TodoList";

// Button custom
const Button1 = () => (
  <button
    style={{
      background: "red",
      border: "none",
      color: "white",
      padding: "5px 10px",
      borderRadius: "3px",
    }}
  >
    Buy Now
  </button>
);

const Button3 = () => (
  <button
    style={{
      background: "blue",
      border: "none",
      color: "white",
      padding: "5px 10px",
      borderRadius: "3px",
    }}
  >
    Test
  </button>
);

// Page: Buttons
function ButtonsLayout() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

// Page: Counter
function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter</h2>
      <p style={{ fontSize: "20px" }}>Count: {count}</p>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/button" element={<ButtonsLayout />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
}

export default App;
