import { getProducts, getProductsByCategory } from "../../asycmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    if (!categoryid) {
      getProducts()
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      getProductsByCategory(categoryid)
        .then((response) => {
          setProduct(response);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryid]);

  if (loading) {
    return <h1>cargando...</h1>;
  }

  return (
    <div>
      <h1>{props.titulo}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
