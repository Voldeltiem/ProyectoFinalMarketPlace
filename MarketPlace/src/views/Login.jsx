import React from 'react'
import Form from 'react-bootstrap/Form';
import Nava from "../components/Nava"
import Button from 'react-bootstrap/Button';
import NavaDesk from '../components/NavaDesk';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import axios from "axios";
import { useState, useContext } from "react";



function Login() {
  const navigate = useNavigate()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const [usuario, setUsuarioLocal] = useState({});
  const { setUsuario } = useContext(Context);


  const registroClick = () => {
    navigate("/registro")
  }
  const inicioClick = () => {
    navigate("/")
  }

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", token);
      setUsuario()
      navigate("/perfil");
      
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  return (
    <div>
      {isMobile && <Nava />}
      {!isMobile && <NavaDesk />}
      <div id='login'>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={usuario.email}
              onChange={handleSetUsuario}
              type="email"
              name="email"
              placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={usuario.password}
              onChange={handleSetUsuario}
              type="password"
              name="password" 
              placeholder="Password" />
          </Form.Group>
          <div id='conteinerButomLogin'>
            <Button className='colorBoton' onClick={iniciarSesion} variant="primary" type="submit">
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