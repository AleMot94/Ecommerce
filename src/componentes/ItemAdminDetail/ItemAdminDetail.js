import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { bd } from "../../service/firebase";
import Modificar from "../Modificar/Modificar";

const ItemAdminDetail = ({ id, name, price, category, stock }) => {
  const [showModificar, setShowModificar] = useState(false);

  const handleModificarTrue = () => {
    setShowModificar(true);
  };

  const handleModificarFalse = () => {
    setShowModificar(false);
  };

  const deleteProdct = async (id) => {
    await deleteDoc(doc(bd, "products", id));
  };

  return (
    <div>
      <ul>
        <li>
          <p>id : </p>
          {id}
        </li>
        <li>
          <p>nombre : </p>
          {name}
        </li>
        <li>
          <p>precio : </p>
          {price}
        </li>
        <li>
          <p>stock : </p>
          {stock}
        </li>
        <li>
          <p>categoria : </p>
          {category}
        </li>
      </ul>
      <button onClick={() => handleModificarTrue}>modificar</button>
      <button onClick={() => deleteProdct(id)}>eliminar</button>
      {showModificar && <Modificar id={id} />}
      {showModificar && (
        <button onClick={() => handleModificarFalse}>cerrar</button>
      )}
    </div>
  );
};

export default ItemAdminDetail;
