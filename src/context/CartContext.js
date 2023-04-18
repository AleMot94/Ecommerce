import { createContext, useState } from "react";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
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
    /*const docRef = collection(bd, "orders");
    addDoc(docRef, objOrder).then(({ id }) => {
      console.log(id);
    });*/

    const batch = writeBatch(bd);
    const ids = cart.map((prod) => prod.id);
    const collectionRef = collection(bd, "products");
    const fueraDeStock = [];

    getDocs(query(collectionRef, where(documentId(), "in", ids)))
      .then((response) => {
        response.docs.forEach((doc) => {
          const dataDoc = doc.data();
          const prod = cart.find((prod) => prod.id === doc.id);
          const cantidadProd = prod.cantidad;

          if (dataDoc.stock >= cantidadProd) {
            batch.update(doc.ref, { stock: dataDoc.stock - cantidadProd });
          } else {
            fueraDeStock.push({ id: doc.id, ...dataDoc });
          }
        });
      })
      .then(() => {
        if (fueraDeStock.length === 0) {
          const collectionRef = collection(bd, "orders");
          return addDoc(collectionRef, objOrder);
        } else {
          return Promise.reject({
            type: "fuera_de_stock",
            products: fueraDeStock,
          });
        }
      })
      .then(({ id }) => {
        batch.commit();
      })
      .catch((error) => {
        if (error.type === "fuera_de_stock") {
          console.log("hay productos que no tienen stock");
        } else {
          console.log(error);
        }
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
