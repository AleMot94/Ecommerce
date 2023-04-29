import CardProd from "../CardProd/CardProd";
import "./ItemList.css";

const ItemList = ({ products }) => {
  return (
    <>
      <div className="d-flex flex-row justify-content-around flex-wrap">
        {products.map((prod) => (
          <CardProd key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
