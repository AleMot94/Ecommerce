import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartDeatil from "../CartDetail/CartDetail";

const CartList = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>carrito de compras</h1>
      <ul>
        {cart.map((prod) => (
          <CartDeatil key={prod.id} {...prod} />
        ))}
      </ul>
      <div>TOTAL :</div>
      <div>
        <button>limpiar carrito</button>
        <button>comprar</button>
      </div>
    </div>
  );
};

export default CartList;
