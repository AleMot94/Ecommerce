import "./App.css";
import NavBarComp from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import CartList from "./componentes/CartList/CartList";
//import { Counter } from "./componentes/Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import Checkout from "./componentes/Checkout/Checkout";

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
      <CartProvider>
        <BrowserRouter>
          <NavBarComp />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer titulo="ECOMMERCE" />}
            />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainer titulo="ECOMMERCE" />}
            />
            <Route
              path="/detail/:productid"
              element={<ItemDetailConteiner />}
            />
            <Route path="/cart" element={<CartList />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
