import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginConatiner from "../LoginContainer/LoginContainer";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../context/LoginContext";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const NavBarComp = () => {
  const { user } = useContext(LoginContext);

  return (
    <>
      <Navbar bg="warning" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <Button variant="outline-dark">Home</Button>
              </Nav.Link>
              <Nav.Link href="/contacto">
                <Button variant="outline-dark">Contacto</Button>
              </Nav.Link>
              <DropdownButton
                id="dropdown-button-dark-example2"
                variant="outline-dark"
                menuVariant="dark"
                title="Productos"
                className="mt-2"
              >
                <Dropdown.Item href="/todos">Todos</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/category/celulares">
                  Celulares
                </Dropdown.Item>
                <Dropdown.Item href="/category/tablets">Tablets</Dropdown.Item>

                <Dropdown.Item href="/category/televisores">
                  Televisores
                </Dropdown.Item>
              </DropdownButton>
              {user && user.email === "alejandro_1031m@hotmail.com" && (
                <Link to={"/admin"} className="ms-3 mt-2">
                  <Button variant="outline-dark">ADMIN</Button>
                </Link>
              )}
              <LoginConatiner />
            </Nav>
          </Navbar.Collapse>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComp;
