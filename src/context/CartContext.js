import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  const addItem = (product) => {
    //if (!cart.some((prod) => prod.id === product.id)) {
    //  setCart([...cart, product]);
    //} esto es lo mismo que la validacion de abajo, para que no vuelva a agregar un producto con el mismo id
    if (cart.some((prod) => prod.id === product.id)) {
      setCart([...cart]);
    } else {
      setCart([...cart, product]);
    }
  };

  const getCartQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.cantidad;
    });

    return totalQuantity;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, getCartQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
