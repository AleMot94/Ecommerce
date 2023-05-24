import Form from "react-bootstrap/Form";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { collection, addDoc } from "firebase/firestore";
import { bd } from "../../service/firebase";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [consultation, setConsultation] = useState("");

  const addConsultationFireStore = async () => {
    await addDoc(collection(bd, "consultation"), {
      name,
      email,
      telephone,
      consultation,
    });

    setName("");
    setEmail("");
    setTelephone("");
    setConsultation("");
  };

  return (
    <div>
      <h1 className="fw-bold mb-5">Contacto</h1>
      <Form className="container fw-bold px-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label>Nombre completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre y apellido"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="number"
            placeholder="ingrese un numero de telefono"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Escriba aqui su consulta</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={consultation}
            onChange={(e) => setConsultation(e.target.value)}
          />
        </Form.Group>
        <Button onClick={addConsultationFireStore} variant="success">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
