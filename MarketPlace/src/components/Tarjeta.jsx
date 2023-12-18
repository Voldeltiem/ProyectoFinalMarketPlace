import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate} from "react-router-dom";

function Tarjeta({ producto }) {
    const navigate = useNavigate();
    
    const location = useLocation();/**
    * location comprueba la ruta y realiza una funcion segun eso
    */
    const detalleClick = () => {
        navigate(`/publicacionDetalle/${producto.id_producto}`);
    }
    const editarPublicaion = () => {
        navigate(`/editarPublicacion/${producto.id_producto}`)
    }
    const isButtonDisabled = location.pathname === "/";
    let buttonComponent = null;
    switch (location.pathname) {
        case "/misPublicaciones":
            buttonComponent = (
                <div className='buttonsTarjet'>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary">Ver mas</Button>
                    <Button className='colorBottomTarjet' onClick={editarPublicaion} variant="success">Editar</Button>
                </div>
            )
            break;
        case "/publicaciones":
            buttonComponent = (
                <>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary" disabled={isButtonDisabled}>Ver mas</Button>
                </>
            )
            break;
        default:
            buttonComponent = (
                <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary" disabled={isButtonDisabled}>Ver mas</Button>
            )
            break;
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
                    {buttonComponent}
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta