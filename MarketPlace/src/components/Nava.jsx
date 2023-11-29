//mennu de navegacion superior para vista escritorio
import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BarraBusqueda from './BarraBusqueda';

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

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div id='menuContainer'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup size='lg' className="me-2 botonFixes" aria-label="First group">
            {location.pathname === '/login' && location.pathname !== '/perfil'? (//si es igual a login ara lo primero
              <Button onClick={inicioClick}>
                Inicio
              </Button>
            ) : (//si no es igual a login ara lo segundo
              <Button onClick={loginClick}>
                Login
              </Button>
            )}
            {location.pathname === '/perfil' ? (
              // Mostrar tres botones específicos para la vista de perfil
              <>
                <Button>abc</Button>
                <Button>123</Button>
                <Button>1bc</Button>
              </>
            ) : (
              // Mostrar el botón de login para otras vistas
              <Button onClick={loginClick}>
                Login
              </Button>
            )}
            <Button onClick={() => setModalShow(true)}>Buscar</Button>
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