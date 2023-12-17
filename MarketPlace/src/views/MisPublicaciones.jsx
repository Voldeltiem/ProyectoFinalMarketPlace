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

function MisPublicaciones() {

    const isMobile = useMediaQuery({ maxWidth: 768 });
    const usuarioContext = useContext(Context);
    const { usuario, setUsuario } = usuarioContext;
    const id_usuario = usuario.id_usuario;

    const [productos, setProductos] = useState([]);

    const urlServer = "http://localhost:3000";
    // const endpoint = `/misPublicaciones`;
    const endpoint = `/`;

    useEffect(() => {

        // const publicacionesDeUSuario = async () => {
        //     try {
        //         console.log(id_usuario)
        //         const response = await axios.post(urlServer + endpoint, id_usuario );
        //         setProductos(response.data);
        //     } catch (error) {
        //         console.error("Error al obtener los productos:", error);
        //     }
        // };

        // publicacionesDeUSuario();
        const fetchData = async () => {
            try {
              const response = await axios.get(urlServer+endpoint);
              setProductos(response.data);
            } catch (error) {
              console.error("Error al obtener los productos:", error);
            }
          };
      
          fetchData();
    }, []);
    
    return (
        <div>
            {!isMobile && <NavaDesk />}
            <div id='h1Titulo'>
                <h1>Mis Publicaciones</h1>
            </div>
            <Market productos={productos} />
            <Footer />
            {isMobile && <Nava />}
        </div>
    )
}

export default MisPublicaciones