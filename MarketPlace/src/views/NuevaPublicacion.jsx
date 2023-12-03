import React from 'react'
import Nava from "../components/Nava";

function NuevaPublicacion() {
  return (
    <div>
      <div id='h1Titulo'>
        <h1>Perfil</h1>
      </div>
<<<<<<< Updated upstream
      <Nava/>
=======
      <Form id='formularioPublicacion' noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Producto"
              defaultValue="Lampara"
            />
            <Form.Control.Feedback>hacen falta de esos!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>precio</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Valor del producto"
              defaultValue="10.00"
            />
            <Form.Control.Feedback>es un buen precio!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Imagen del producto</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="URL de imagen"
              defaultValue="http//:gatitos.com"
            />
            <Form.Control.Feedback>que buena foto!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripcion producto</Form.Label>
            <Form.Control
            required
            type="text"
            placeholder="agrega una brebe descripcion de tu producto"
            defaultValue="lampara de color rosa , poco uso" as="textarea" rows={3} />
            <Form.Control.Feedback>no se te queda nada?</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className='colorBoton' type="submit">Submit form</Button>
      </Form>
      <Nava />
>>>>>>> Stashed changes
    </div>
  )
}

export default NuevaPublicacion