import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CounterCart from "../CounterCart/CounterCart";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, name, img, price, category, stock, description }) => {
  const { addItem } = useContext(CartContext);
  const [quantityAdded, setQuantityAdded] = useState(0);

  // agrega el producto al carrito y va contando la cantidad de productos en el carrito
  const handleOnAdd = (cantidad) => {
    addItem({ id, name, price, cantidad });
    setQuantityAdded(cantidad);
  };

  return (
    <div className="conteinerItemDetail">
      <img className="imgItemDetail" src={img} alt={name} />

      <Card border="dark" style={{ width: "18rem" }}>
        <Card.Header>
          <h3>{name}</h3>
        </Card.Header>

        <Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item className="d-flex flex-row">
              <p>prcio :</p>
              <p>${price}</p>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row">
              <p>categoria :</p>
              <p>{category}</p>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row">
              <p>stock :</p>
              <p>{stock} unidades</p>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex flex-row">
              <p>descripcion :</p>
              <p>{description}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              {quantityAdded === 0 ? (
                <CounterCart onAdd={handleOnAdd} stock={20} />
              ) : (
                <Link to="/cart">terminar compra</Link>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
