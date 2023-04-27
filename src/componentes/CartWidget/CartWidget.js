import "./CartWidget.css";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  const { getCartQuantity } = useContext(CartContext);
  const totalQuantity = getCartQuantity();

  return (
    <div className="d-flex flex-column">
      <Badge bg="secondary" className="mb-2">
        {totalQuantity}
      </Badge>
      <FontAwesomeIcon
        icon={faCartShopping}
        size="lg"
        className="text-secondary"
      />
    </div>
  );
};
