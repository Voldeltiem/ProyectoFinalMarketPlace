//mennu de navegacion superior para vista escritorio
import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

function Nava() {
  return (
    <div id='menuContainer'>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup size='lg' className="me-2 botonFixes" aria-label="First group">
          <Button>Inicio</Button>
          <Button>Buscar</Button> 
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}

export default Nava