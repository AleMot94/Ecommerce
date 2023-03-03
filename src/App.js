import "./App.css";
import NavBarComp from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
//import { Counter } from "./componentes/Counter/Counter";
//import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";

function App() {
  /* EJEMPLO DEL CONTADOR 
  const [show, setShow] = useState(true);
  const agregarCarrito = () => {
    console.log("se agrego al carrito");
  };*/

  /* ESTO VA EN EL RETURN
    <button onClick={() => setShow(!show)}>show/hide</button>
      {show && (
        <Counter
          initial={10}
          title="contador"
          stock={20}
          onAdd={agregarCarrito}
        />
      )}
  */

  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComp />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="ECOMMERCE" />} />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer titulo="ECOMMERCE" />}
          />
          <Route path="/detail/:productid" element={<ItemDetailConteiner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
