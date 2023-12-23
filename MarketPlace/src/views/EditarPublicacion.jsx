import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../components/Footer"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nava from '../components/Nava';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import NavaDesk from '../components/NavaDesk';
import { useMediaQuery } from 'react-responsive';
import { useContext } from 'react';
import Context from '../Context/MyContext';


function EditarPublicacion() {
    const [validated, setValidated] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const usuarioContext = useContext(Context);
    const { usuario, setUsuario } = usuarioContext;
    const navigate = useNavigate();
    const { id } = useParams();
    const [publicacion, setPublicacion] = useState({});

    const eliminarPublicacion = async () =>{
        try {
            const urlServer = 'https://todomercado.netlify.app';
            const endpoint = `/mispublicaciones/${id}`;

            // Realiza la solicitud al backend para eliminar una publicación
            const response = await axios.delete(urlServer + endpoint);

            navigate('/misPublicaciones');
            // Maneja la respuesta del servidor
        } catch (error) {
            console.error('Error al elimanar publicacion', error);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        // Obtén los valores del formulario
        const nombre_producto = form.elements['validationCustom01'].value;
        const precio = form.elements['validationCustom02'].value;
        const url = form.elements['validationCustom03'].value;
        const descripcion = form.elements['exampleForm.ControlTextarea1'].value;
        const id_usuario = usuario.id_usuario;

        // Validación de datos
        if (!nombre_producto || !precio || !url || !descripcion) {
            alert('Por favor, complete todos los campos');
            return;
        }

        // Realiza la solicitud al backend solo si la validación del formulario pasa
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            try {
                const urlServer = 'https://todomercado.onrender.com';
                const endpoint = '/editarPublicacion';

                // Realiza la solicitud al backend para editar una nueva publicación
                const response = await axios.put(urlServer + endpoint, {
                    nombre_producto,
                    descripcion,
                    precio,
                    id,
                    url,
                });

                navigate('/misPublicaciones');
                // Maneja la respuesta del servidor
                console.log(response.data);
            } catch (error) {
                console.error('Error al crear la publicación:', error);
            }
        }

        setValidated(true);
    };

    const publicacionesClick = () => {
        navigate("/misPublicaciones")
    }

    useEffect(() => {
        const urlServer = "https://todomercado.onrender.com";
        const endpoint = `/publicacionDetalle/`;

        const fetchData = async () => {
            try {
                const response = await axios.get(urlServer + endpoint + id);
                setPublicacion(response.data);
            } catch (error) {
                console.error("Error al obtener los datos de la publicación:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {!isMobile && <NavaDesk />}
            <div id='h1Titulo'>
                <h1>Editar publicacion</h1>
            </div>
            <Card id='tarjetaDetalle'>
                <Card.Img className='imagenDetalle' variant="top" src={publicacion.url} />
                <Card.Body id='bodytarjetaDetalle'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group as={Col} md='4' controlId='validationCustom01'>
                            <Form.Label>Nombre producto</Form.Label>
                            <Form.Control defaultValue={publicacion.nombre_producto} required type='text' placeholder='Producto' />
                            <Form.Control.Feedback>¡Hacen falta de esos!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md='4' controlId='validationCustom02'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control defaultValue={publicacion.precio} required type='number' placeholder='Valor del producto' />
                            <Form.Control.Feedback>¡Es un buen precio!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md='4' controlId='validationCustom03'>
                            <Form.Label>Imagen del producto</Form.Label>
                            <Form.Control defaultValue={publicacion.url} required type='text' placeholder='URL de imagen' />
                            <Form.Control.Feedback>¡Qué buena foto!</Form.Control.Feedback>
                        </Form.Group>
                        <Card.Text>
                            <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
                                <Form.Label>Descripción producto</Form.Label>
                                <Form.Control defaultValue={publicacion.descripcion} required type='text' placeholder='Agrega una breve descripción de tu producto' as='textarea' rows={3} />
                                <Form.Control.Feedback>¡No se te queda nada?</Form.Control.Feedback>
                            </Form.Group>

                        </Card.Text>
                        <div className='buttonsTarjet'>
                            <Button className='colorBottomTarjet' onClick={publicacionesClick} variant="primary">Volver</Button>
                            <Button className='colorBoton' variant="success" type='submit'>Editar</Button>
                            <Button className='colorBoton' variant="danger" onClick={eliminarPublicacion}>Eliminar</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            {isMobile && <Nava />}
            <Footer />
        </div>
    )
}

export default EditarPublicacion