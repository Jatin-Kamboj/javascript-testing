import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function decrementCounter() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <h1>This is counter App</h1>
      <h3 id="counter-value">{counter}</h3>
      <button onClick={() => setCounter(counter + 1)} id="increment-btn">
        Increment
      </button>
      <button onClick={decrementCounter} id="decrement-btn">
        Decrement
      </button>
    </div>
  );
}
