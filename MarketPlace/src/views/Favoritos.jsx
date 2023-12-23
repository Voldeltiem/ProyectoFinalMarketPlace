import React from 'react'
import Nava from "../components/Nava"
import Market from '../components/Market'
import Footer from "../components/Footer"
import { useMediaQuery } from 'react-responsive';
import NavaDesk from "../components/NavaDesk";
import { useEffect, useState } from 'react';
import axios from 'axios';  // Importa Axios
import { useContext } from 'react';
import Context from '../Context/MyContext';

function Favoritos() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
    const usuarioContext = useContext(Context);
    const { usuario, setUsuario, esFavoritos } = usuarioContext;
    const id_usuario = usuario.id_usuario;

    const [productos, setProductos] = useState([]);

    //se deja mientras funcion para llamr atodas las publicaiones del usuario
    const urlServer = "https://todomercado.onrender.com";
    const endpoint = `/favoritos`;
    /* const endpoint = `/`;*/

    useEffect(() => {

        const publicacionesDeUSuario = async () => {
            try {
              console.log(`el id ${id_usuario} se obtiene al cargar`)
                const response = await axios.get(urlServer + endpoint, { params: { id_usuario } });
                setProductos(response.data);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };

        publicacionesDeUSuario();
    }, []);

  return (
    <div>
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Favoritos</h1>
      </div>
      <Market productos={productos}/>
      {isMobile && <Nava />}
      <Footer />
    </div>
  )
}

export default Favoritos