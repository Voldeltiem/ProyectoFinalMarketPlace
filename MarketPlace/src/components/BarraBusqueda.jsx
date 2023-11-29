import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function BarraBusqueda(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ingrese que desea buscar</Form.Label>
                        <Form.Control type="email" placeholder="Ejemplo: Patito amarillo" />
                    </Form.Group>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Buscar</Button>
                    </Modal.Footer>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default BarraBusqueda