import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartDeatil = ({ id, name, price, cantidad }) => {
  const { remuve } = useContext(CartContext);
  return (
    <>
      <div>
        <div>producto :{name}</div>
        <div>cantidad :{cantidad}</div>
        <div>precio :{price}</div>
        <div>subtotal :{price * cantidad}</div>
      </div>

      <button
        onClick={() => {
          remuve(id);
        }}
      >
        eliminar
      </button>
    </>
  );
};

export default CartDeatil;
