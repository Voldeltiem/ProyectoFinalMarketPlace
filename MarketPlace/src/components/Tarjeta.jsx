import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Tarjeta({ producto }) {
    const navigate = useNavigate();

    const detalleClick = () => {
        navigate("/publicacionDetalle")
    }

    return (
        <div id='tarjeta'>
            <Card>
                <Card.Img id='imagenTarjeta' variant="top" src={producto.url} />
                <Card.Body className='cardBody'>
                    <Card.Title>{producto.nombre_producto}</Card.Title>
                    <Card.Text>
                    ${producto.precio}
                    </Card.Text>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary">Ver mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta