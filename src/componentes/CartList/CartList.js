import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import LoginContext from "../../context/LoginContext";
import Button from "react-bootstrap/Button";

import ListGroup from "react-bootstrap/ListGroup";

const CartList = () => {
  const { cart, totalPrice, cleanCart, remuve } = useContext(CartContext);
  const { user } = useContext(LoginContext);

  const total = totalPrice();

  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <h1 className="fw-bold">carrito de compras</h1>

        {cart.map((prod) => {
          return (
            <ListGroup key={prod.id} className="fw-bold mb-4 mt-2" horizontal>
              <ListGroup.Item style={{ width: "22rem" }}>
                {prod.name}
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "10rem" }}>
                Precio ${prod.price}
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "10rem" }}>
                Cantidad {prod.cantidad}
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "10rem" }}>
                Sub Total ${prod.cantidad * prod.price}
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    remuve(prod.id);
                  }}
                >
                  eliminar
                </button>
              </ListGroup.Item>
            </ListGroup>
          );
        })}

        <div className="fw-bold bg-success mb-5" style={{ width: "15rem" }}>
          <h2 className="d-flex justify-content-around">
            <p className="mb-0">Total</p> ${total}
          </h2>
        </div>
        <div>
          <button
            className="btn btn-secondary me-5"
            onClick={() => {
              cleanCart();
            }}
          >
            limpiar carrito
          </button>
          {user && user.isLoggedIn ? (
            <Link to="/checkout">
              <Button variant="success">Finalizar Compra</Button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-warning">
                Inicia sesión para finalizar la compra
              </button>
            </Link>
          )}

          {/*<button onClick={updatePrecio}>update precio</button>*/}
        </div>
      </div>
    </div>
  );
};

export default CartList;
