import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
export const CartWidget = () => {
  const { getCartQuantity } = useContext(CartContext);
  const totalQuantity = getCartQuantity();

  return (
    <div>
      <img className="img" src="/images/carrito-icon.webp" alt="cart-widget" />
      {totalQuantity}
    </div>
  );
};
