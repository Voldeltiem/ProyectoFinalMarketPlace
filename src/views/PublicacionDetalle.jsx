import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from "../components/Footer"
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function PublicacionDetalle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [publicacion, setPublicacion] = useState({});

  const publicacionesClick = () => {
    navigate("/misPublicaciones")
  }

  useEffect(() => {
    const urlServer = "https://todomercado.onrender.com";
    const endpoint = `/publicacionDetalle/`;

    const fetchData = async () => {
      try {
        const response = await axios.get(urlServer+endpoint+id);
        setPublicacion(response.data);
        console.log(response.data)
      } catch (error) {
        console.error("Error al obtener los datos de la publicación:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div id='h1Titulo'>
        <h1>Perfil</h1>
      </div>
      <div>
        <Card id='tarjetaDetalle'>
          <Card.Img className='imagenDetalle' variant="top" src={publicacion.url}/>
          <Card.Body id='bodytarjetaDetalle'>
            <h1>{publicacion.nombre_producto}</h1>
            <h2>Precio: ${publicacion.precio}</h2>
            <h6>Nuemero de contacto: {publicacion.telefono}</h6>
            <Card.Text>
              Descripcion: "{publicacion.descripcion}"
            </Card.Text>
            <Button className='colorBottomTarjet' onClick={publicacionesClick} variant="primary">Volver</Button>
          </Card.Body>
        </Card>
      </div>
      <Footer />
    </div>
  )
}

export default PublicacionDetalle