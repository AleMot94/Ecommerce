import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import LoginContext from "../../context/LoginContext";
import CartDeatil from "../CartDetail/CartDetail";

const CartList = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const { user } = useContext(LoginContext);

  const total = totalPrice();

  return (
    <div>
      <h1>carrito de compras</h1>
      <ul>
        {cart.map((prod) => (
          <CartDeatil key={prod.id} {...prod} />
        ))}
      </ul>
      <div>TOTAL :{total}</div>
      <div>
        <button
          onClick={() => {
            cleanCart();
          }}
        >
          limpiar carrito
        </button>
        {user && user.isLoggedIn ? (
          <Link to="/checkout">
            <button>finalizar compra</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Inicia sesión para finalizar la compra</button>
          </Link>
        )}

        {/*<button onClick={updatePrecio}>update precio</button>*/}
      </div>
    </div>
  );
};

export default CartList;
