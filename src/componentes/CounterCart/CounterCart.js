import { useState } from "react";
import Button from "react-bootstrap/Button";

const CounterCart = ({ stock, onAdd }) => {
  const [count, setCount] = useState(0);

  const subtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const Add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div class="d-flex justify-content-around">
        <Button className="ms-4" variant="secondary" onClick={subtraction}>
          -
        </Button>
        <h5>{count}</h5>
        <Button className="me-4" variant="secondary" onClick={Add}>
          +
        </Button>
      </div>
      <Button
        className="mt-2"
        variant="success"
        onClick={() => {
          onAdd(count);
        }}
      >
        agregar al carrito
      </Button>
    </>
  );
};

export default CounterCart;
