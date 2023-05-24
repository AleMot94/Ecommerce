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
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Checkout = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const [modalShow, setModalShow] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");

  const handleObjOrder = (e) => {
    e.preventDefault();
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
      .then(() => {
        batch.commit();
        setModalShow(true);

        cleanCart();
        setName("");
        setSurname("");
        setTelefono("");
        setDireccion("");
        setEmail("");
      })
      .catch((error) => {
        if (error.type === "fuera_de_stock") {
          console.log("hay productos que no tienen stock");
        } else {
          console.log(error);
        }
      });
  };

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          className="bg-dark text-emphasis-primary text-light"
          closeButton
        >
          <Modal.Title id="contained-modal-title-vcenter">
            Gracias por su compra
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="bg-success-subtle">Confirmacion de compra</h4>
          <p>le llegara a su mail, su factura de compra</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/">
            <Button variant="success" onClick={props.onHide}>
              Finalizar
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <div>
        <h1 className="fw-bold">FORMULARIO</h1>

        <Form className="container fw-bold">
          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese su apellido"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="number"
              placeholder="ingrese su telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Direccion</Form.Label>
            <Form.Control
              type="text"
              placeholder="ingrese calle y numero"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 d-flex flex-column align-items-start">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ingrese su email, por ejemplo: algunmail@hotmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" onClick={handleObjOrder}>
            Comprar
          </Button>
        </Form>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </div>
    </div>
  );
};
export default Checkout;
