import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { LoginProvider } from "./context/LoginContext";
import NavBarComp from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import CartList from "./componentes/CartList/CartList";
import ItemDetailConteiner from "./componentes/ItemDetailConteiner/ItemDetailConteiner";
import Checkout from "./componentes/Checkout/Checkout";
import Login from "./componentes/Login/Login";
import Register from "./componentes/Register/Register";
import Admin from "./componentes/Admin/Admin";
import ProtectedRoute from "./componentes/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <LoginProvider>
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
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <Admin />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </LoginProvider>
      </CartProvider>
    </div>
  );
}

export default App;
