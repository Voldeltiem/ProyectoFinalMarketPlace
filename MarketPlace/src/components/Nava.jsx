//mennu de navegacion superior para vista escritorio
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BarraBusqueda from './BarraBusqueda';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaRegPlusSquare } from "react-icons/fa";

function Nava() {

  const navigate = useNavigate();
  const location = useLocation();/**
   * location comprueba la ruta y realiza una funcion segun eso
   */

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

  let buttonComponent = null;

  switch (location.pathname) {
    case "/login":
      buttonComponent = (
        <>
          <Button onClick={inicioClick}><IoMdHome /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
    case '/':
      buttonComponent = (
        <>
          <Button onClick={loginClick}><RxAvatar /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
      case '/perfil':
      buttonComponent = (
        <>
          <Button onClick={publicacionesClick}><FaNewspaper /></Button>
          <Button onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button onClick={favoritosClick}><FaRegHeart /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
      case '/publicaciones' :
      buttonComponent = (
        <>
        <Button onClick={perfilClick}><RxAvatar /></Button>
          <Button onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button onClick={favoritosClick}><FaRegHeart /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
      case '/nuevaPublicacion' :
      buttonComponent = (
        <>
          <Button onClick={publicacionesClick}><FaNewspaper /></Button>
          <Button onClick={perfilClick}><RxAvatar /></Button>
          <Button onClick={favoritosClick}><FaRegHeart /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
      case '/favoritos' :
      buttonComponent = (
        <>
          <Button onClick={perfilClick}><RxAvatar /></Button>
          <Button onClick={publicacionesClick}><FaNewspaper /></Button>
          <Button onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
    default:
      buttonComponent = (
        <>
          <Button onClick={() => setModalShow(true)}>{<FaMagnifyingGlass/>}</Button>
        </>
      );
      break;
  }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div id='menuContainer'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup size='lg' className="me-2 botonFixes" aria-label="First group">
            {buttonComponent}
            <BarraBusqueda
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </ButtonGroup>
        </ButtonToolbar>
      </div>
    </div>
  );
}

export default Nava