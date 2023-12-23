import React from 'react'
import Form from 'react-bootstrap/Form';
import Nava from "../components/Nava"
import Button from 'react-bootstrap/Button';
import NavaDesk from '../components/NavaDesk';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import axios from "axios";
import { useState, useContext } from "react";
import Context from "../Context/MyContext"
import Footer from '../components/Footer';




function Login() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { setUsuario } = useContext(Context);
  const usuarioContext = useContext(Context);
  const { token, setToken } = usuarioContext;
  const navigate = useNavigate();
  const [usuario, setUsuarioLocal] = useState({
    email: "",
    password: "",
  });


  const registroClick = () => {
    navigate("/registro")
  }

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;
    setUsuarioLocal({ ...usuario, ...field });
  };

  const iniciarSesion = async (e) => {
    e.preventDefault();
    const urlServer = "https://todomercado.onrender.com";
    const endpoint = "/login";
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const { data: token } = await axios.post(urlServer + endpoint, usuario);
      localStorage.setItem("token", token);
      setToken(token)
      setUsuario()
      navigate("/perfil");
    } catch ({ response: { data: message } }) {
      alert("Usuario o contraseña Incorrectos");
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
      <Footer />

    </div>
  )
}

export default Login