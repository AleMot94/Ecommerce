import ItemAdminDetail from "../ItemAdminDetail/ItemAdminDetail";

const ItemAdmin = ({ products }) => {
  return (
    <ul>
      {products.map((prod) => (
        <ItemAdminDetail key={prod.id} {...prod} />
      ))}
    </ul>
  );
};

export default ItemAdmin;
