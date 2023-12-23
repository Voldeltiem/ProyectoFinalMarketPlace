import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useNavigate } from "react-router-dom";
import Heart from './Heart';
import { useContext } from 'react';
import Context from '../Context/MyContext';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Tarjeta({ producto }) {
    const navigate = useNavigate();
    const usuarioContext = useContext(Context);
    const { usuario, setUsuario } = usuarioContext;



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
    let heartComponent = null;
    switch (location.pathname) {
        case "/misPublicaciones":
            buttonComponent = (
                <div className='buttonsTarjet'>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary">Ver mas</Button>
                    <Button className='colorBottomTarjet' onClick={editarPublicaion} variant="success">Editar</Button>
                </div>
            )
            heartComponent = (
                <Heart id_usuario={usuario.id_usuario} id_producto={producto.id_producto} />
            )
            break;
            case "/favoritos":
            buttonComponent = (
                <div className='buttonsTarjet'>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary">Ver mas</Button>
                </div>
            )
            heartComponent = (
                <Heart id_usuario={usuario.id_usuario} id_producto={producto.id_producto} />
            )
            break;
        case "/publicaciones":
            buttonComponent = (
                <>
                    <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary" disabled={isButtonDisabled}>Ver mas</Button>
                </>
            )
            heartComponent = (
                <Heart id_usuario={usuario.id_usuario} id_producto={producto.id_producto} />
            )
            break;
        default:
            buttonComponent = (
                <Button className='colorBottomTarjet' onClick={detalleClick} variant="primary" disabled={isButtonDisabled}>(Debe logear para ver mas)</Button>
            )
            heartComponent = (
                <></>
            )
            break;
    }

    return (
        <div id='tarjeta'>
            <Card>
                {heartComponent}
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