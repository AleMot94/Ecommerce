import { useParams } from "react-router-dom";
import { getProducts } from "../../service/firebase/firestore";
import { useData } from "../../hooks/dataRenderProd";
import { useContext } from "react";

import ItemList from "../ItemList/ItemList";
import LoginContext from "../../context/LoginContext";
import LoginConatiner from "../LoginContainer/LoginContainer";

const ItemListContainer = (props) => {
  const { user, logout, loading } = useContext(LoginContext);

  const { categoryid } = useParams();

  const { isLoading, data, error } = useData(
    () => getProducts(categoryid),
    [categoryid]
  );

  const handleLogout = async () => {
    await logout();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Hubo un error</h1>;
  }

  if (loading) return <h1>loading</h1>;

  return (
    <div>
      <h1>{props.titulo}</h1>
      <LoginConatiner user={user.email} logout={handleLogout} />
      {data.length > 0 ? (
        <ItemList products={data} />
      ) : (
        <h1>No hay productos</h1>
      )}
    </div>
  );
};

export default ItemListContainer;
