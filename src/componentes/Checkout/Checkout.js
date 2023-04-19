import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import {
  addDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { bd } from "../../service/firebase";

const Checkout = () => {
  const { cart, totalPrice } = useContext(CartContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const handleObjOrder = () => {
    console.log("generar orden de compra");
    const total = totalPrice();
    const objOrder = {
      buyer: {
        name: name,
        surname: surname,
        telefono: telefono,
        direccion: direccion,
        email: email,
      },
      item: cart,
      total: total,
    };

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
        console.log(id);
      })
      .catch((error) => {
        if (error.type === "fuera_de_stock") {
          console.log("hay productos que no tienen stock");
        } else {
          console.log(error);
        }
      });
  };

  return (
    <div>
      <h1>FORMULARIO</h1>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          id="name"
          type="terxt"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="surname">Apellido</label>
        <input
          id="surname"
          type="terxt"
          name="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />

        <label htmlFor="telefono">telefono</label>
        <input
          id="telefono"
          type="tel"
          name="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />

        <label htmlFor="direccion">Direccion</label>
        <input
          id="direccion"
          type="tel"
          name="direccion"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input type="submit" onChange={handleObjOrder}></input>
      </form>

      <button onClick={handleObjOrder}>comprar</button>
    </div>
  );
};
export default Checkout;
