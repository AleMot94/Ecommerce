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

const NavBarComp = () => {
  const { user } = useContext(LoginContext);

  return (
    <>
      <Navbar bg="warning" expand="lg" className="fw-bold pt-1">
        <Container>
          <Link className="text-decoration-none text-black mt-2 me-2" to="/">
            Todo-Pantalla
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">
                <Button variant="outline-dark" className="fw-bold mt-2 mx-2">
                  Home
                </Button>
              </Link>
              <Link to="/contacto">
                <Button variant="outline-dark" className="fw-bold mt-2 mx-2">
                  Contacto
                </Button>
              </Link>

              <Dropdown className="mx-2">
                <Dropdown.Toggle
                  id="dropdown-button-dark-example1"
                  variant="outline-dark"
                  className="fw-bold mt-2"
                >
                  Productos
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark" className=" text-center">
                  <Link
                    to="/todos"
                    className="text-light fw-bold text-decoration-none"
                  >
                    Todos
                  </Link>
                  <Dropdown.Divider />
                  <div className="d-flex flex-column">
                    <Link
                      to="/category/celulares"
                      className="text-light fw-bold text-decoration-none"
                    >
                      Celulares
                    </Link>
                    <Link
                      to="/category/tablets"
                      className="text-light fw-bold text-decoration-none"
                    >
                      Tablets
                    </Link>

                    <Link
                      to="/category/televisores"
                      className="text-light fw-bold text-decoration-none"
                    >
                      Televisores
                    </Link>
                  </div>
                </Dropdown.Menu>
              </Dropdown>

              {user && user.email === "alejandro_1031m@hotmail.com" && (
                <Link to={"/admin"} className="ms-3 mt-2">
                  <Button variant="outline-dark" className="fw-bold">
                    ADMIN
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
          <LoginConatiner />
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBarComp;
