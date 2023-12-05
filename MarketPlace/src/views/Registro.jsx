import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nava from "../components/Nava";
import NavaDesk from '../components/NavaDesk';
import { useMediaQuery } from 'react-responsive';

function Registro() {
  const [validated, setValidated] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  return (
    <div>
      {isMobile && <Nava />}
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Nuevo Usuario</h1>
      </div>
      <Form id='registro' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre usuario</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Susana Horia"

            />
            <Form.Control.Feedback>Bienvenido!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="cultivos@naturales.cl"
            />
            <Form.Control.Feedback>este sera tu correo de ingreso!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="tu contraseña"
            />
            <br />
            <Form.Control
              required
              type="password"
              placeholder="repite tu contraseña"
            />
            <Form.Control.Feedback>tu contraseña debe tener un lago de 8 caracteres y al menos un numero!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="+56912345678"
            />
            <Form.Control.Feedback>con este numero te contactaran!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className='colorBoton' type="submit">registrate</Button>
      </Form>
    </div>
  )
}

export default Registro