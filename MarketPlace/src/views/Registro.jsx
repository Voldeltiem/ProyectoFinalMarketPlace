import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Nava from "../components/Nava";
import NavaDesk from '../components/NavaDesk';
import { useMediaQuery } from 'react-responsive';
import axios from "axios";
import Footer from '../components/Footer';



function Registro() {
  const [validated, setValidated] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: '',
    password: '',
    telefono: '',
  });

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuario({ ...usuario, ...field });
  };

  const registrarUsuario = async () => {
    const urlServer = "https://todomercado.onrender.com";
    const endpoint = "/registro";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      navigate("/login");
    } catch (error) {
      alert("Algo salió mal ...");
      console.log(error);
    console.log(usuario)
    }
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
              name='nombre'
              placeholder="Susana Horia"
              value={usuario.nombre}
              onChange={handleSetUsuario}
            />
            <Form.Control.Feedback>Bienvenido!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              required
              type="email"
              name='email'
              placeholder="cultivos@naturales.cl"
              value={usuario.email}
              onChange={handleSetUsuario}
            />
            <Form.Control.Feedback>este sera tu correo de ingreso!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type='password'
              placeholder='tu contraseña'
              name='password'
              value={usuario.password}
              onChange={handleSetUsuario}
              isInvalid={!usuario.confirmPasswordIsValid}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom05">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="56912345678"
              name='telefono'
              value={usuario.telefono}
              onChange={handleSetUsuario}
            />
            <Form.Control.Feedback>con este numero te contactaran!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className='colorBoton' onClick={registrarUsuario}>registrate</Button>
      </Form>
      <Footer />
    </div>
  )
}

export default Registro