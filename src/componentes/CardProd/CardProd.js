import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CardProd = ({ id, name, price, img }) => {
  return (
    <Card style={{ width: "12rem" }}>
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
