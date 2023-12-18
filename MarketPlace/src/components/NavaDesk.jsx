import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/TodoMercado-logos_white_peque.png"
import { useLocation, useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
import { FaMagnifyingGlass } from "react-icons/fa6";


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
    navigate("/misPublicaciones")
  }

  let linkComponent = null;

  let buttonComponent = null;

  switch (location.pathname) {
    case "/":
      linkComponent = (
        <>
          <Nav.Link onClick={loginClick} >Login</Nav.Link>
          <Nav.Link onClick={registroClick} >Registrase</Nav.Link>
        </>
      );
      break;
      case "/login":
      linkComponent = (
        <>
          <Nav.Link onClick={inicioClick} >Inicio</Nav.Link>
          <Nav.Link onClick={registroClick} >Registrase</Nav.Link>
        </>
      );
      break;
      case "/registro":
      linkComponent = (
        <>
          <Nav.Link onClick={inicioClick} >Inicio</Nav.Link>
          <Nav.Link onClick={loginClick} >Login</Nav.Link>
        </>
      );
      break;
      case "/perfil":
      linkComponent = (
        <>
          <Nav.Link onClick={publicacionesClick} >Publicaiones</Nav.Link>
          <Nav.Link onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link onClick={favoritosClick} >Favoritos</Nav.Link>
        </>
      );
      break;
      case "/publicaciones":
      linkComponent = (
        <>
          <Nav.Link onClick={perfilClick} >perfil</Nav.Link>
          <Nav.Link onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          <Nav.Link onClick={favoritosClick} >Favoritos</Nav.Link>
        </>
      );
      break;
      case "/nuevaPublicacion":
        linkComponent = (
          <>
            <Nav.Link onClick={perfilClick} >perfil</Nav.Link>
            <Nav.Link onClick={publicacionesClick} >Publicaciones</Nav.Link>
            <Nav.Link onClick={favoritosClick} >Favoritos</Nav.Link>
          </>
        );
        break;
        case "/favoritos":
        linkComponent = (
          <>
            <Nav.Link onClick={perfilClick} >perfil</Nav.Link>
            <Nav.Link onClick={publicacionesClick} >Publicaciones</Nav.Link>
            <Nav.Link onClick={nuevaPublicacionClick} >Nueva Publicacion</Nav.Link>
          </>
        );
        break;
    default:
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={() => setModalShow(true)}>{<FaMagnifyingGlass />}</Button>
        </>
      );
      break;
  }

  return (
    <div className='navaDesk'>
      <Navbar expand="lg">
        <Container >
          <Navbar.Brand ><img id='h1TituloImagen' src={logo} alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {linkComponent}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default NavaDesk