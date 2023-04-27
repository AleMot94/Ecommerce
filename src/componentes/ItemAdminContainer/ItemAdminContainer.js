import { getProducts } from "../../service/firebase/firestore";
import { useData } from "../../hooks/dataRenderProd";
import ItemAdmin from "../ItemAdmin/ItemAdmin";

const ItemAdminContainer = () => {
  const { isLoading, data, error } = useData(() => getProducts());

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  return (
    <div>
      <h2>todos los productos</h2>
      {data.length > 0 ? (
        <ItemAdmin products={data} id={data.id} />
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
};

export default ItemAdminContainer;
