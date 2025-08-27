import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Button from "./assets/Component/Button";
import TodoList from "./pages/TodoList";

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
      <Button label="Buy Now" color="red" />
      <Button label="Default Blue" /> {/* default color = blue */}
      <Button label="Test" color="blue" />
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
        <Button label="-" color="gray" onClick={() => setCount(count - 1)} />
        <Button label="+" color="green" onClick={() => setCount(count + 1)} />
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
