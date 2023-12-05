import React from 'react'
import Nava from "../components/Nava";
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';
import { useMediaQuery } from 'react-responsive';
import NavaDesk from '../components/NavaDesk'


function Perfil() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    
    <div>
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Perfil</h1>
      </div>
      {isMobile && <Nava />}
      <div>
        <div id='datosPhone'>
          <div className='conteinerDatos'>
            <p><strong>Usuario:</strong> </p>
            <p>Susana Horia de la granja</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Email:</strong> </p>
            <p>SusanaHoria@lagranja.com</p>
          </div>
          <div className='conteinerDatos'>
            <p><strong>Phone:</strong> </p>
            <p>+56912345678</p>
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