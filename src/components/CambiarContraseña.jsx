import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function CambiarContraseña({ show, onHide, email }) {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const cambiarPass = async () => {
        try {
            const urlServer = "https://todomercado.onrender.com";
            const endpoint = "/perfil";

            // Validar que las contraseñas coincidan
            if (newpassword !== confirmPassword) {
                alert('Las contraseñas no coinciden');
                return;
            }
            console.log(email, password, newpassword)

            // Realiza la solicitud PATCH al backend
            const response = await axios.patch(
                urlServer + endpoint,
                { email, password, newpassword }
            );
            // Verifica si la respuesta es válida antes de cerrar el modal
            if (response.data.valid) {
                setErrorMessage(''); // Borra el mensaje de error si existe
                onHide(); // Cierra el modal
                Navigate("/perfil"); // Redirige a la página de perfil si es necesario
            } else {
                setErrorMessage('Error al cambiar la contraseña');
            }
            console.log(response.data);
        } catch (error) {
            console.error("Error al cambiar la contraseña:", error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Escoja su nueva contraseña
                </Modal.Title>
            </Modal.Header>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password"
                        placeholder="Escriba su actual contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNewPassword">
                    <Form.Control type="password"
                        placeholder="Escriba su nueva contraseña"
                        value={newpassword}
                        onChange={(e) => setnewPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <Form.Control type="password"
                        placeholder="Confirme su nueva contraseña"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </Form.Group>
            </Form>
            <Modal.Footer>
                <Button type='submit' onClick={cambiarPass}>Cambiar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CambiarContraseña