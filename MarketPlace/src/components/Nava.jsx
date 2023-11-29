//mennu de navegacion superior para vista escritorio
import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import BarraBusqueda from './BarraBusqueda';

function Nava() {

  const navigate = useNavigate();

  const loginClick = () => {
    navigate("./login")
  }
  // const BuscarClick = () => {
  //   navigate("./buscar")
  // }

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <div id='menuContainer'>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup size='lg' className="me-2 botonFixes" aria-label="First group">

            <Button onClick={loginClick}
            >Login</Button>

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