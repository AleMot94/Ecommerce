export const adapterProductFromFirestore = (doc) => {
  const data = doc.data();

  const productFormatted = {
    id: doc.id,
    name: data.name,
    price: data.price,
    stock: data.stock,
    category: data.category,
    description: data.description,
    img: data.img,
  };

  return productFormatted;
};
