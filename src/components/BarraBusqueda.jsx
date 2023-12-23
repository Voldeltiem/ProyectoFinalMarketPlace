import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';  // Importa Axios
import { useContext } from 'react';
import Context from '../Context/MyContext';

function BarraBusqueda(props) {
    const usuarioContext = useContext(Context);
    const { productosBuscados, setProductosBuscados, productosBase, setProductosBase } = usuarioContext; //estado global
    const [ productoInicial, setProductoInicial ]  = useState([]);
    const [ busqueda, setBusqueda ]  = useState("");//lo que se digita en busqueda

    const handleChange = (e) => {
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        if (terminoBusqueda.trim() === '') {
            setProductosBuscados(productosBase); // Restaura la lista completa si la búsqueda está vacía
            return;
        }

        const resultados = productosBase.filter((elemento) => {
            return elemento.nombre_producto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase());
        });

        setProductosBuscados(resultados);

    }

    useEffect(() => {
        setProductosBuscados(productosBase);
    }, [productosBase]);

    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className='colorModal'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ingrese que desea buscar</Form.Label>
                        <Form.Control onChange={handleChange} value={busqueda} placeholder="Ejemplo: Patito amarillo" />
                    </Form.Group>
                    <Modal.Footer>
                        <Button className='colorBoton' onClick={props.onHide}>cerrar</Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default BarraBusqueda