import React from 'react'
import Form from 'react-bootstrap/Form';
import Nava from "../components/Nava"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate()

  const registroClick = ()=>{
    navigate("/registro")
  }
  const inicioClick = ()=>{
    navigate("/")
  }

  return (
    <div>
      <Nava/>
      <div id='login'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div id='conteinerButomLogin'>
            <Button className='colorBoton' onClick={inicioClick} variant="primary" type="submit">
              Login
            </Button>
            <Button className='colorBoton' onClick={registroClick} variant="primary">
              registrar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login