import CardProd from "../CardProd/CardProd";

const ItemList = ({ products }) => {
  return (
    <ul>
      {products.map((prod) => (
        <CardProd key={prod.id} {...prod} />
      ))}
    </ul>
  );
};

export default ItemList;
