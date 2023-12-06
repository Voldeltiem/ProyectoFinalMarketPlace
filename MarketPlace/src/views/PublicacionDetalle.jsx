import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../components/Footer"
import { useNavigate, useLocation } from 'react-router-dom';

function PublicacionDetalle() {
  const navigate = useNavigate();

  const publicacionesClick = () => {
    navigate("/publicaciones")
  }

  return (
    <div>
      <div id='h1Titulo'>
        <h1>Perfil</h1>
      </div>
      <div>
      <Card id='tarjetaDetalle'>
        <Card.Img className='imagenDetalle' variant="top" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body id='bodytarjetaDetalle'>
          <h2>precio</h2>
          <h5>contacto</h5>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className='colorBottomTarjet' onClick={publicacionesClick} variant="primary">Volver</Button>
        </Card.Body>
      </Card>
      </div>
      <Footer/>
    </div>
  )
}

export default PublicacionDetalle