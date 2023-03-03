import { getProductsById } from "../../asycmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailConteiner = () => {
  const [product, setProduct] = useState();

  const params = useParams();

  useEffect(() => {
    getProductsById(params.productid).then((response) => {
      setProduct(response);
    });
  });

  return (
    <>
      <h1>detalle del producto</h1>
      <ItemDetail {...product} />
    </>
  );
};

export default ItemDetailConteiner;
