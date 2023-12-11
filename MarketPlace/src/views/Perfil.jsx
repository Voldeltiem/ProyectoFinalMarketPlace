import React from 'react'
import Nava from "../components/Nava";
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import NavaDesk from '../components/NavaDesk'
import { useContext, useState, useEffect } from "react";
import Context from "../Context/MyContext";
import axios from "axios";
import { useNavigate } from 'react-router';


function Perfil() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const [usuarioLocal, setUsuarioLocal] = useState({});

  const logout = () => {
    setUsuario(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3000";
    const endpoint = "/perfil";
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      setUsuarioLocal(data);
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
            <p><strong>Usuario:</strong> {usuarioLocal.nombre}</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Email:</strong> {usuarioLocal.email}</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Phone:</strong> {usuarioLocal.telefono}</p>
          </div>
          <div className='conteinerDatos'>
            <Button className='colorBoton'>Cambiar Password</Button>
          </div>
          <div className='conteinerDatos'>
            <Button className='colorBoton' id='salirButtom' onClick={logout}>Salir</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Perfil