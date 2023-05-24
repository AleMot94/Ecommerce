import { useState, useContext } from "react";
import LoginContext from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const Register = () => {
  const { singup } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const user = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    setError("");
    try {
      await singup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("* correo invalido");
      }
      if (error.code === "auth/weak-password") {
        setError("* la contraseña debe contener al menos 6 caracteres");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center mt-5 pt-5 ">
        <Form className="mx-5 px-5 bg-warning rounded-4 pt-3 w-50">
          <Form.Group
            as={Row}
            className="mb-3 mt-4"
            controlId="formPlaintextEmail"
          >
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Password
            </Form.Label>
            <Col sm="8">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
            {error && <p className="mb-3">{error}</p>}
          </Form.Group>
          <Button className="mb-3" variant="light" onClick={handleSubmit}>
            Registrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
