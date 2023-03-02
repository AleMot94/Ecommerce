import { useState } from "react";

export const Counter = ({ initial, title, stock }) => {
  const [count, setCount] = useState(initial);

  const subtraction = () => {
    setCount(count - 1);
  };

  const Add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const reset = () => {
    setCount(initial);
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={subtraction}>-</button>
      <h2>{count}</h2>
      <button onClick={Add}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  );
};
