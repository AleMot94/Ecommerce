import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";
import CartDeatil from "../CartDetail/CartDetail";

const CartList = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);

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
        <Link to="/checkout">
          <button>finalizar compra</button>
        </Link>

        {/*<button onClick={updatePrecio}>update precio</button>*/}
      </div>
    </div>
  );
};

export default CartList;
