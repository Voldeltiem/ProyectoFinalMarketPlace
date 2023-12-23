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
import { useEffect } from 'react';

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
  const perfilClick = () => {
    navigate("/perfil")
  }
  const favoritosClick = () => {
    navigate("/favoritos")
  }
  const nuevaPublicacionClick = () => {
    navigate("/nuevaPublicacion")
  }
  const publicacionesClick = () => {
    navigate("/publicaciones")
  }
  const misPublicacionesClick = () => {
    navigate("/misPublicaciones")
  }

  let buttonComponent = null;

  switch (location.pathname) {
    case "/login":
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={inicioClick}><IoMdHome /></Button>
        </>
      );
      break;
    case '/':
      buttonComponent = (
        <>

          <Button className='colorBoton' onClick={loginClick}><RxAvatar /></Button>
          <Button className='colorBoton' onClick={() => setModalShow(true)}>{<FaMagnifyingGlass />}</Button>
        </>
      );
      break;
    case '/perfil':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={misPublicacionesClick}><FaNewspaper /></Button>
          <Button className='colorBoton' onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button className='colorBoton' onClick={favoritosClick}><FaRegHeart /></Button>
          <Button className='colorBoton' onClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>
        </>
      );
      break;
    case '/misPublicaciones':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={perfilClick}><RxAvatar /></Button>
          <Button className='colorBoton' onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button className='colorBoton' onClick={favoritosClick}><FaRegHeart /></Button>
          <Button className='colorBoton' onClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>

        </>
      );
      break;
    case '/registro':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={loginClick}><RxAvatar /></Button>
        </>
      );
      break;
    case '/nuevaPublicacion':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={perfilClick}><RxAvatar /></Button>
          <Button className='colorBoton' onClick={misPublicacionesClick}><FaNewspaper /></Button>
          <Button className='colorBoton' onClick={favoritosClick}><FaRegHeart /></Button>
          <Button className='colorBoton' onClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>

        </>
      );
      break;
    case '/favoritos':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={perfilClick}><RxAvatar /></Button>
          <Button className='colorBoton' onClick={misPublicacionesClick}><FaNewspaper /></Button>
          <Button className='colorBoton' onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button className='colorBoton' onClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>

        </>
      );
      break;
      case '/publicaciones':
      buttonComponent = (
        <>
          <Button className='colorBoton' onClick={perfilClick}><RxAvatar /></Button>
          <Button className='colorBoton' onClick={misPublicacionesClick}><FaNewspaper /></Button>
          <Button className='colorBoton' onClick={nuevaPublicacionClick}><FaRegPlusSquare /></Button>
          <Button className='colorBoton' onClick={favoritosClick}><FaRegHeart /></Button>
          <Button className='colorBoton' onClick={() => { setModalShow(true); publicacionesClick() }}>{<FaMagnifyingGlass />}</Button>

        </>
      );
      break;
      
    default:
      buttonComponent = (
        <>
          
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
    <div>
      <div id='menuContainer'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup size='lg' className=" botonFixes" >
            {buttonComponent}

          </ButtonGroup>
          <BarraBusqueda
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </ButtonToolbar>
      </div>
    </div>
  );
}

export default Nava