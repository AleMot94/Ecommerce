import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //ITEMDETAL.JS
  // agrega el producto al carrito
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
  //ITEMDETAL.JS

  //CARTWIDGET.JS
  // obtiene la cantidad de productos en el carrito
  const getCartQuantity = () => {
    let totalQuantity = 0;

    cart.forEach((prod) => {
      totalQuantity += prod.cantidad;
    });

    return totalQuantity;
  };
  //CARTWIDGET.JS

  //CARTDETAIL.JS
  // remueve un producto de la lista del carrito
  const remuve = (id) => {
    const newCart = cart.filter((prod) => prod.id !== id);
    setCart(newCart);
  };
  //CARTDETAIL.JS

  // CARTLIST.JS
  // precio total de todos los productos del carrito
  const totalPrice = () => {
    let total = 0;
    cart.forEach((prod) => {
      total += prod.cantidad * prod.price;
    });

    return total;
  };

  // limpia el carrito de todos los productos
  const cleanCart = () => {
    setCart([]);
  };
  // CARTLIST.JS

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getCartQuantity,
        remuve,
        totalPrice,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
