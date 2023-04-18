import { getDocs, collection, query, where } from "firebase/firestore";
import { bd } from ".";
import { adapterProductFromFirestore } from "../../adapters/productAdapter";

export const getProducts = (categoryid) => {
  return new Promise((resolve, reject) => {
    // se conecta a la base de datos en firebase filtrando con la categoria del producto
    const collectionRef = categoryid
      ? query(collection(bd, "products"), where("category", "==", categoryid))
      : collection(bd, "products");

    // obtiene los documentos de firebase
    getDocs(collectionRef)
      .then((response) => {
        const producsFirestore = response.docs.map((doc) => {
          return adapterProductFromFirestore(doc);
        });
        resolve(producsFirestore);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
