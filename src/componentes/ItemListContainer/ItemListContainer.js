//import { getProducts, getProductsByCategory } from "../../asycmock";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import { bd } from "../../service/firebase";

const ItemListContainer = (props) => {
  const [products, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    // se conecta a la base de datos en firebase filtrando con la categoria del producto
    const collectionRef = categoryid
      ? query(collection(bd, "products"), where("category", "==", categoryid))
      : collection(bd, "products");

    // obtiene los documentos de firebase ()
    getDocs(collectionRef)
      .then((response) => {
        const producsFirestore = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProduct(producsFirestore);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });

    /*if (!categoryid) {
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
    }*/
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
