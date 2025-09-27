import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 10)}>+ </button>
      <button onClick={() => setCount(count - 5)}>- </button>
      <button onClick={() => setCount(0)}>O </button>
    </div>
  );
}



