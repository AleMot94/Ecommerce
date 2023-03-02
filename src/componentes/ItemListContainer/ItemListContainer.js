import { getProducts } from "../../asycmock";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getProducts().then((response) => {
      setProduct(response);
    });
  }, []);

  return (
    <div>
      <h1>{props.titulo}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
