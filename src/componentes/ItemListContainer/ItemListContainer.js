import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../service/firebase/firestore";
import { useData } from "../../hooks/dataRenderProd";

const ItemListContainer = (props) => {
  const { categoryid } = useParams();

  const { isLoadong, data, error } = useData(
    () => getProducts(categoryid),
    [categoryid]
  );

  if (isLoadong) {
    return <h1>cargando...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  return (
    <div>
      <h1>{props.titulo}</h1>
      {data.length > 0 ? (
        <ItemList products={data} />
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
