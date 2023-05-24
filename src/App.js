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
import Modificar from "./componentes/Modificar/Modificar";
import Home from "./componentes/Home/Home";
import Footer from "./componentes/Footer/Footer";

function App() {
  return (
    <div className="App bg-dark-subtle d-flex flex-column min-vh-100">
      <CartProvider>
        <LoginProvider>
          <BrowserRouter>
            <NavBarComp />
            <div className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/todos"
                  element={<ItemListContainer titulo="Todo-Pantalla" />}
                />
                <Route
                  path="/category/:categoryid"
                  element={<ItemListContainer titulo="Todo-Pantalla" />}
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
                <Route path="/modificar" element={<Modificar />}></Route>
              </Routes>
            </div>
            <Footer className="mt-auto" />
          </BrowserRouter>
        </LoginProvider>
      </CartProvider>
    </div>
  );
}

export default App;
