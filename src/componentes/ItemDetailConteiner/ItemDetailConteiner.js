import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { bd } from "../../service/firebase";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState();

  const params = useParams();

  useEffect(() => {
    // se conecta al producto con el id en firebase
    const docRef = doc(bd, "products", params.productid);

    //obtiene el producto de firebase
    getDoc(docRef)
      .then((doc) => {
        const productFirestore = { id: doc.id, ...doc.data() };
        setProduct(productFirestore);
      })
      .catch((error) => {
        console.log(error);
      });
    /*getProductsById(params.productid).then((response) => {
      setProduct(response);
    });*/
  }, [params.productid]);

  return (
    <>
      <h1>detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailConteiner;
