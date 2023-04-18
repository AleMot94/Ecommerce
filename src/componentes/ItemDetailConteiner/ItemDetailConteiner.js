import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../service/firebase/firestore";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState();
  const { productid } = useParams();
  const { loading, setLoading } = useState(true);

  useEffect(() => {
    getProduct(productid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    /*getProductsById(params.productid).then((response) => {
      setProduct(response);
    });*/
  }, [productid]);

  if (loading) {
    return <h1>cargando...</h1>;
  }

  return (
    <>
      <h1>detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailConteiner;
