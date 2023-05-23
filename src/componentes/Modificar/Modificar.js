import { useState } from "react";
import { bd, storage } from "../../service/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Modificar = ({ id, setNewRender, setShowModificar }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const updateProd = async (id) => {
    const docRef = doc(bd, "products", id);
    await updateDoc(docRef, { name, price, img, category, description, stock });

    setName("");
    setPrice("");
    setImg("");
    setCategory("");
    setDescription("");
    setStock("");

    setShowModificar(false);
    setNewRender(false);
  };

  const addImgFireStorage = async (e) => {
    const fileImg = e.target.files[0];
    const refFile = ref(storage, `imgecommerce/${fileImg.name}`);
    await uploadBytes(refFile, fileImg);
    const urlImg = await getDownloadURL(refFile);
    setImg(urlImg);
  };

  return (
    <div className="container" style={{ width: "36rem" }}>
      <Form className="container fw-bold">
        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="ingrese el titulo de su producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingrese el precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Ingrese una imagen</Form.Label>
          <Form.Control
            type="file"
            placeholder="ingrese una imagen del producto"
            onChange={addImgFireStorage}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Categoria</Form.Label>
          <Form.Control
            type="text"
            placeholder="categoria del producto"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control
            as={"textarea"}
            type="text"
            placeholder="ingrese una descripcion del producto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 d-flex flex-column align-items-start">
          <Form.Label>Stock</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingrese cantidad en stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" onClick={() => updateProd(id)}>
          Actualizar
        </Button>
      </Form>
    </div>
  );
};

export default Modificar;
