import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import CounterCart from "../CounterCart/CounterCart";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
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
    <>
      <div>
        <div className="d-block d-sm-none  ">
          <div className="d-flex justify-content-center fw-bold">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item className="d-flex flex-row justify-content-evenly">
                  <p>Precio</p>
                  {price}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-row justify-content-evenly">
                  <p>Stock</p>
                  {stock}
                </ListGroup.Item>
                <ListGroup.Item>
                  {quantityAdded === 0 ? (
                    <CounterCart onAdd={handleOnAdd} stock={20} />
                  ) : (
                    <Link to="/cart">
                      <Button variant="success">terminar compra</Button>
                    </Link>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>

        <div className="d-none d-sm-block">
          <div className=" d-flex flex-row justify-content-evenly fw-bold">
            <img style={{ height: "500px" }} src={img} alt={name} />

            <Card style={{ width: "19rem" }}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{name}</h3>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-column justify-content-evenly">
                  <p>Descripcion</p>
                  {description}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-row justify-content-evenly">
                  <p>Stock</p>
                  {stock}
                </ListGroup.Item>
                <ListGroup.Item className="d-flex flex-row justify-content-evenly">
                  <p>Precio</p>
                  {price}
                </ListGroup.Item>
                <ListGroup.Item className="mt-5">
                  {quantityAdded === 0 ? (
                    <CounterCart onAdd={handleOnAdd} stock={20} />
                  ) : (
                    <Link to="/cart">
                      <Button variant="success">terminar compra</Button>
                    </Link>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
