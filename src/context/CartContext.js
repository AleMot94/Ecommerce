import { createContext, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { bd } from "../service/firebase";

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

  // envia la orden de compra al back de firebase
  const handleObjOrder = () => {
    console.log("generar orden de compra");
    const total = totalPrice();
    const objOrder = {
      buyer: {
        name: "alguien",
        telefono: 12345567,
        direccion: "av siempre viva 123",
        mail: "estemailnoesfalso@hotmail.com",
      },
      item: cart,
      total: total,
    };
    const docRef = collection(bd, "orders");
    addDoc(docRef, objOrder).then(({ id }) => {
      console.log(id);
    });
  };

  // ejemplo para actualizar datos de los productos en el back de firebase
  /*const updatePrecio = () => {
    const docRef = doc(bd, "products", "5FIuFZr2WUY3khPSNWQM");

    updateDoc(docRef, { precio: 1000 });
  };*/
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
        handleObjOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
