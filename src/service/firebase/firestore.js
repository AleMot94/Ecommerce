import {
  getDoc,
  getDocs,
  doc,
  collection,
  query,
  where,
} from "firebase/firestore";
import { bd } from ".";
import { adapterProductFromFirestore } from "../../adapters/productAdapter";

/////////////////////////////////////////////////////
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

//////////////////////////////////////////////////

export const getProduct = (productid) => {
  return new Promise((resolve, reject) => {
    const docRef = doc(bd, "products", productid);

    getDoc(docRef)
      .then((doc) => {
        const productFirestore = { id: doc.id, ...doc.data() };
        resolve(productFirestore);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//////////////////////////////////////////////////
