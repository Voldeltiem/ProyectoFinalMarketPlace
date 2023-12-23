import React from 'react'
import Nava from "../components/Nava";
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import NavaDesk from '../components/NavaDesk'
import { useContext, useState, useEffect } from "react";
import Context from "../Context/MyContext";
import axios from "axios";
import { useNavigate } from 'react-router';
import CambiarContraseña from '../components/CambiarContraseña';
import Footer from '../components/Footer';

function Perfil() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const usuarioContext = useContext(Context);
  const { usuario = {}, setUsuario } = usuarioContext;
  const [modalShow, setModalShow] = React.useState(false);

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const getUsuarioData = async () => {
    const urlServer = "https://todomercado.onrender.com";
    const endpoint = "/perfil";
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuario(data);
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  useEffect(() => {
    getUsuarioData();
  }, []);


  return (
    <div>
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Perfil </h1>
      </div>
      {isMobile && <Nava />}
      <div>
        <div id='datosPhone'>
          <div className='conteinerDatos'>
            <p><strong>Usuario:</strong> {usuario.nombre}</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Email:</strong> {usuario.email}</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Phone:</strong> {usuario.telefono}</p>
          </div>
          <div className='conteinerDatos'>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              cambiar contraseña
            </Button>
          </div>
          <div className='conteinerDatos'>
            <Button className='colorBoton' id='salirButtom' onClick={logout}>Salir</Button>
          </div>
        </div>
        <CambiarContraseña
          show={modalShow}
          onHide={() => setModalShow(false)}
          email={usuario.email}
        />
      </div>
      <Footer />

    </div>
  )
}

export default Perfil