import React from 'react'
import Nava from "../components/Nava";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavaDesk from '../components/NavaDesk';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import { useContext } from 'react';
import Context from '../Context/MyContext';


function NuevaPublicacion() {
  const [validated, setValidated] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { usuario } = useContext(Context);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      try {
        // Obtén los valores del formulario
        const nombre_producto = form.elements["validationCustom01"].value;
        const precio = form.elements["validationCustom02"].value;
        const url = form.elements["validationCustom03"].value;
        const descripcion = form.elements["exampleForm.ControlTextarea1"].value;
        const idUsuario = usuario.id;
        console.log("ID de usuario:", idUsuario);


        const urlServer = "http://localhost:3000";
        const endpoint = `/nuevaPublicacion/${idUsuario}`;
        console.log("ID de usuario:", idUsuario);


        // Realiza la solicitud al backend para crear una nueva publicación
        const response = await axios.post(
          urlServer+endpoint,
          { nombre_producto, descripcion, precio, url }
        );

        // Maneja la respuesta del servidor
        console.log(response.data); // Imprime la respuesta del servidor (puedes ajustar según lo necesario)
      } catch (error) {
        console.error("Error al crear la publicación:", error);
      }
    };

    setValidated(true);
  };

  return (
    <div>
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Nueva Publicacion</h1>
      </div>
      <Form id='formularioPublicacion' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Producto"
        
            />
            <Form.Control.Feedback>hacen falta de esos!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>precio</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Valor del producto"
             
            />
            <Form.Control.Feedback>es un buen precio!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Imagen del producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="URL de imagen"
              
            />
            <Form.Control.Feedback>que buena foto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="agrega una brebe descripcion de tu producto"
             as="textarea" rows={3} />
            <Form.Control.Feedback>no se te queda nada?</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className='colorBoton' type="submit">Publicar</Button>
      </Form>
      {isMobile && <Nava />}

    </div>
  )
}

export default NuevaPublicacion