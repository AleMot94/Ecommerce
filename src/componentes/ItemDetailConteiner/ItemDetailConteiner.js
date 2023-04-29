import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from "../../service/firebase/firestore";
import { useData } from "../../hooks/dataRenderProd";

const ItemDetailConteiner = () => {
  const { productid } = useParams();

  const { isLoading, data, error } = useData(
    () => getProduct(productid),
    [productid]
  );

  if (isLoading) {
    return <h1>cargando...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  const dataKeys = Object.keys(data);

  return (
    <>
      <h1 className="fw-bold">Detalle del producto</h1>
      {dataKeys.length > 0 ? (
        <ItemDetail {...data} />
      ) : (
        <h1>No hay producto</h1>
      )}
    </>
  );
};

export default ItemDetailConteiner;
