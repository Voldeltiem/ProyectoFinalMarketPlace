import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta() {
    return (
        <div id='tarjeta'>
            <Card>
                <Card.Img id='imagenTarjeta' variant="top" src="https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        $120.98
                    </Card.Text>
                    <Button variant="primary">Ver mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Tarjeta