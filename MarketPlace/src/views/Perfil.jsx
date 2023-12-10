import React from 'react'
import Nava from "../components/Nava";
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import NavaDesk from '../components/NavaDesk'
import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";

function Perfil() {
  const { setUsuario: setUsuarioGlobal } = useContext(Context);
  const isMobile = useMediaQuery({ maxWidth: 768 })
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
            <p><strong>Usuario:</strong> Susana Horia de la granja</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Email:</strong> SusanaHoria@lagranja.com</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Phone:</strong> +56912345678</p>
          </div>
          <div className='conteinerDatos'>
            <Button className='colorBoton'>Cambiar Password</Button>
          </div>
          <div className='conteinerDatos'>
            <Button className='colorBoton' id='salirButtom'>Salir</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Perfil