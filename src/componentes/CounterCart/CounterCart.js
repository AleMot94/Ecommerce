import { useState } from "react";

const CounterCart = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  // resta 1 en el contador
  const subtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //suma 1 en el contador
  const Add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div>
        <button onClick={subtraction}>-</button>
        <h5>{count}</h5>
        <button onClick={Add}>+</button>
      </div>
      <button
        onClick={() => {
          onAdd(count);
        }}
      >
        agregar al carrito
      </button>
    </>
  );
};

export default CounterCart;
