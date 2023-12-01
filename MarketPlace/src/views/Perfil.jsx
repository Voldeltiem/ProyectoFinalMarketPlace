import React from 'react'
import Nava from "../components/Nava";
import Footer from "../components/Footer"
import Button from 'react-bootstrap/Button';

function Perfil() {
  return (
    <div>
      <div id='h1Titulo'>
        <h1>Perfil</h1>
      </div>
      <Nava />
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
            <Button>Cambiar Password</Button>
          </div>
          <div className='conteinerDatos'>
            <Button id='salirButtom'>Salir</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Perfil