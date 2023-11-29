import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PublicacionDetalle() {
  return (
    <div>
      <Card>
      <Card.Img className='imagenDetalle' variant="top" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Volver</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default PublicacionDetalle