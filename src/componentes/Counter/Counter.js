import { useState, useEffect } from "react";

export const Counter = ({ initial, title, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [result, setResult] = useState(0);

  useEffect(() => {
    console.log("componente montado"); //se ejecuta por unica vez cuando es montado, gracias a los corchetes vacios como segundo parametro, si no se ejecuta cada vez que actualiza tambien.
    return () => console.log("se va desmontar el componente");
    //con el return podemos ejecutar una accion antes que se desmonte el componente, es importante que el return contenga una funcion de callback.
  }, []);

  useEffect(() => {
    setResult(count * 2); //se ejecuta cada vez que hay un cambio en la variable escuchada en los corchetes
  }, [count]);

  const subtraction2 = () => {
    for (let i = 0; i < 2; i++) {
      setCount((prev) => prev - 1);
    }
  };
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
      <button onClick={subtraction2}>- 2</button>
      <button onClick={subtraction}>-</button>
      <h2>{count}</h2>
      <button onClick={Add}>+</button>
      <button onClick={reset}>reset</button>
      <h2>count * 2 = {result}</h2>
      <button onClick={onAdd}>agregar al carrito</button>
    </div>
  );
};
