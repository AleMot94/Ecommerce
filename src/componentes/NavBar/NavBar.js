import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginConatiner from "../LoginContainer/LoginContainer";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBarComp = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/">Ecommerce</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
              <NavDropdown
                className={{}}
                title="Productos"
                id="basic-nav-dropdown"
              >
                <Link to="/category/celulares">celulares</Link>
                <Link to="/category/tablets">tablets</Link>
                <Link to="/category/televisores">televisores</Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>

          <Link to={"/admin"}>ADMIN</Link>
        </Container>
        <Link to={"/cart"}>
          <LoginConatiner />
          <CartWidget />
        </Link>
      </Navbar>
    </>
  );
};

export default NavBarComp;
