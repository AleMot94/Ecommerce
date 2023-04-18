import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../service/firebase/firestore";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    getProducts(categoryid)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
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
