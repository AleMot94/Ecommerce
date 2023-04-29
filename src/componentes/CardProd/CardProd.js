import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CardProd = ({ id, name, price, img }) => {
  return (
    <>
      <Card
        className="mb-3 border border-warning bg-secondary-subtle fw-bold d-block d-sm-none "
        style={{ width: "8rem" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Link to={`/detail/${id}`}>
            <Button className="fw-bold" variant="outline-info">
              ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <Card
        className="mb-5 border border-warning bg-secondary-subtle fw-bold d-none d-sm-block"
        style={{ width: "13rem" }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Link to={`/detail/${id}`}>
            <Button className="fw-bold" variant="outline-info">
              ver detalle
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProd;
