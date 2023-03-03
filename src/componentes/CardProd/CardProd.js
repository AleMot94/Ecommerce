//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardProd = ({ id, name, price, category, img, stock, description }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{price}</Card.Text>
        <Link to={`/detail/${id}`}>ver detalle</Link>
      </Card.Body>
    </Card>
  );
};

export default CardProd;
