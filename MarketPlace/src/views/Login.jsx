import React from 'react'
import Form from 'react-bootstrap/Form';
import Nava from "../components/Nava"

function Login() {
  return (
    <div>
      <Nava/>
      <div id='login'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Label htmlFor="inputPassword5">Password</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and numbers,
            and must not contain spaces, special characters, or emoji.
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div id='conteinerButomLogin'>
            <Button className='colorBoton' variant="primary" type="submit">
              Login
            </Button>
            <Button className='colorBoton' onClick={registroClick} variant="primary" type="submit">
              registrar
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Login