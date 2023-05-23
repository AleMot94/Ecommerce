import { getProducts } from "../../service/firebase/firestore";
import { useData } from "../../hooks/dataRenderProd";
import ListGroup from "react-bootstrap/ListGroup";
import { doc, deleteDoc } from "firebase/firestore";
import { bd } from "../../service/firebase";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modificar from "../Modificar/Modificar";

const ItemAdminContainer = () => {
  const [showModificar, setShowModificar] = useState(false);
  const [newRender, setNewRender] = useState(true);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const { isLoading, data, error } = useData(() => getProducts(), [newRender]);

  const handleModificarTrue = (id) => {
    setSelectedProductId(id);
    setShowModificar(true);
  };

  const handleModificarFalse = () => {
    setShowModificar(false);
  };

  const deleteProdct = async (id) => {
    await deleteDoc(doc(bd, "products", id));
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  return (
    <div>
      <h2>todos los productos</h2>
      {data.length > 0 ? (
        data.map((prod) => {
          return (
            <>
              <ListGroup
                key={prod.id}
                className="fw-bold mb-4 mt-2 container"
                horizontal
              >
                <ListGroup.Item style={{ width: "15rem" }}>
                  {prod.name}
                </ListGroup.Item>
                <ListGroup.Item style={{ width: "5rem" }}>
                  Precio ${prod.price}
                </ListGroup.Item>
                <ListGroup.Item style={{ width: "10rem" }}>
                  Descripcion {prod.description}
                </ListGroup.Item>
                <ListGroup.Item style={{ width: "8rem" }}>
                  Categoria {prod.category}
                </ListGroup.Item>
                <ListGroup.Item style={{ width: "5rem" }}>
                  Stock {prod.stock}
                </ListGroup.Item>
                <ListGroup.Item style={{ width: "10rem" }}>
                  Imagen
                  <img
                    className="img-fluid"
                    src={prod.img}
                    alt={prod.name}
                  ></img>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-column justify-content-evenly">
                  <Button
                    variant="danger"
                    onClick={() => deleteProdct(prod.id)}
                  >
                    Eliminar
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => handleModificarTrue(prod.id)}
                  >
                    Modificar
                  </Button>
                </ListGroup.Item>
              </ListGroup>
              {showModificar && selectedProductId === prod.id && (
                <>
                  <Modificar
                    id={prod.id}
                    setNewRender={setNewRender}
                    setShowModificar={setShowModificar}
                  />
                  <Button
                    variant="secondary"
                    className="mt-3"
                    onClick={() => handleModificarFalse()}
                  >
                    cerrar
                  </Button>
                </>
              )}
            </>
          );
        })
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
};

export default ItemAdminContainer;
