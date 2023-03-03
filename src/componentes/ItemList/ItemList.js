import CardProd from "../CardProd/CardProd";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <ul className="ul">
      {products.map((prod) => (
        <CardProd key={prod.id} {...prod} />
      ))}
    </ul>
  );
};

export default ItemList;
