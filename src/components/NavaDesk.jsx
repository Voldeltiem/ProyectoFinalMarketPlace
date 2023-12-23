import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/TodoMercado-logos_white_peque.png"
import { useLocation, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import { FaMagnifyingGlass } from "react-icons/fa6";
import BarraBusqueda from './BarraBusqueda';
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';


function NavaDesk() {
  const navigate = useNavigate();
  const location = useLocation();

  const loginClick = () => {
    navigate("/login")
  }
  const inicioClick = () => {
    navigate("/")
  }
  const registroClick = () => {
    navigate("/registro")
  }
  const perfilClick = () => {
    navigate("/perfil")
  }
  const favoritosClick = () => {
    navigate("/favoritos")
  }
  const nuevaPublicacionClick = () => {
    navigate("/nuevaPublicacion")
  }
  const detalleClick = () => {
    navigate("/detallePublicacion")
  }
  const publicacionesClick = () => {
    navigate("/publicaciones")
  }
  const misPublicacionesClick = () => {
    navigate("/misPublicaciones")
  }

  let linkComponent = null;

  let buttonComponent = null;

  switch (location.pathname) {
    case "/":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={loginClick} >Login</Nav.Link>
          <Nav.Link className='link' onClick={registroClick} >Registrase</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true) }}>Buscar</Nav.Link>
        </>
      );
      break;
    case "/login":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={inicioClick} >Inicio</Nav.Link>
          <Nav.Link className='link' onClick={registroClick} >Registrase</Nav.Link>
        </>
      );
      break;
    case "/registro":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={inicioClick} >Inicio</Nav.Link>
          <Nav.Link className='link' onClick={loginClick} >Login</Nav.Link>
        </>
      );
      break;
    case "/perfil":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={misPublicacionesClick} >Mis Publicaciones</Nav.Link>
          <Nav.Link className='link' onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link className='link' onClick={favoritosClick} >Favoritos</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true); publicacionesClick() }}>Buscar</Nav.Link>
        </>
      );
      break;
    case "/misPublicaciones":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={perfilClick} >Perfil</Nav.Link>
          <Nav.Link className='link' onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link className='link' onClick={favoritosClick} >Favoritos</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true); publicacionesClick() }}>Buscar</Nav.Link>
        </>
      );
      break;
    case "/nuevaPublicacion":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={perfilClick} >Perfil</Nav.Link>
          <Nav.Link className='link' onClick={misPublicacionesClick} >Mis Publicaciones</Nav.Link>
          <Nav.Link className='link' onClick={favoritosClick} >Favoritos</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true); publicacionesClick() }}>Buscar</Nav.Link>
        </>
      );
      break;
    case "/favoritos":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={perfilClick} >Perfil</Nav.Link>
          <Nav.Link className='link' onClick={misPublicacionesClick} >Mis Publicaciones</Nav.Link>
          <Nav.Link className='link' onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true); publicacionesClick() }}>Buscar</Nav.Link>
        </>
      );
      break;
      case "/publicaciones":
      linkComponent = (
        <>
          <Nav.Link className='link' onClick={perfilClick} >Perfil</Nav.Link>
          <Nav.Link className='link' onClick={misPublicacionesClick} >Mis Publicaciones</Nav.Link>
          <Nav.Link className='link' onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link className='link' onClick={favoritosClick} >Favoritos</Nav.Link>
          <Nav.Link className='link' onClick={() => { setModalShow(true); publicacionesClick() }}>Buscar</Nav.Link>
        </>
      );
      break;
    default:
      buttonComponent = (
        <>
          <Button className='colorBoton' oonClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>
        </>
      );
      break;
  }

  const [modalShow, setModalShow] = React.useState(false);
  useEffect(() => {
    if (location.pathname === '/publicaciones') {
      setModalShow(true);
    }
  }, [location.pathname]);

  return (
    <div className='navaDesk'>
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand ><img id='h1TituloImagen' src={logo} alt="Logo" /></Navbar.Brand>
          <div className='linksNav'>
            {linkComponent}
          </div>
        </Container>
        <BarraBusqueda
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </Navbar>

    </div>
  )
}

export default NavaDesk