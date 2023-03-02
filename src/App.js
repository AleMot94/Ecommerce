import "./App.css";
import NavBarComp from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { Counter } from "./componentes/Counter/Counter";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const agregarCarrito = () => {
    console.log("se agrego al carrito");
  };

  return (
    <div className="App">
      <NavBarComp />
      <ItemListContainer titulo="ECOMMERCE" />
      <button onClick={() => setShow(!show)}>show/hide</button>
      {show && (
        <Counter
          initial={10}
          title="contador"
          stock={20}
          onAdd={agregarCarrito}
        />
      )}
    </div>
  );
}

export default App;
