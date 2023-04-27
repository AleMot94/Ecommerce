import { useState } from "react";
import { bd, storage } from "../../service/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Modificar = ({ id }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");

  const updatePrecio = async (id) => {
    const docRef = doc(bd, "products", id);
    await updateDoc(docRef, { name, price, img, category, description, stock });

    /*e.target.name.value = "";
    e.target.price.value = "";
    e.target.img.value = "";
    e.target.category.value = "";
    e.target.description.value = "";
    e.target.stock.value = "";*/
  };

  const addImgFireStorage = async (e) => {
    const fileImg = e.target.files[0];
    const refFile = ref(storage, `imgecommerce/${fileImg.name}`);
    await uploadBytes(refFile, fileImg);
    const urlImg = await getDownloadURL(refFile);
    setImg(urlImg);
  };

  return (
    <div>
      <form>
        <label htmlFor="name">nombre</label>
        <input
          name="name"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <label htmlFor="price">precio</label>
        <input
          name="price"
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>

        <label htmlFor="img">imagen del producto</label>
        <input
          name="img"
          type="file"
          id="img"
          onChange={addImgFireStorage}
        ></input>

        <label htmlFor="category">categoria</label>
        <input
          name="category"
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>

        <label htmlFor="description">descripcion</label>
        <input
          name="description"
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>

        <label htmlFor="stock">stock</label>
        <input
          name="stock"
          type="number"
          id="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        ></input>
      </form>
      <button onClick={updatePrecio(id)}>confirmar modificacion</button>
    </div>
  );
};

export default Modificar;
