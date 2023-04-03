import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CartDeatil = ({ id, name, price, cantidad }) => {
  const { remuve } = useContext(CartContext);
  return (
    <>
      <li>id :{id}</li>
      <li>producto :{name}</li>
      <li>cantidad :{cantidad}</li>
      <li>precio :{price}</li>
      <li>subtotal :{price * cantidad}</li>
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
