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

function Publicaciones() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const usuarioContext = useContext(Context);
    const { productosBuscados, setProductosBuscados, productosBase, setProductosBase } = usuarioContext; //estado global
    const [productos, setProductos] = useState([]);
    const [marketKey, setMarketKey] = useState(0); // Estado local para cambiar la clave

    const urlServer = "https://todomercado.onrender.com";
    const endpoint = `/`;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(urlServer + endpoint);
                setProductosBase(response.data);
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
                <h1>Publicaciones</h1>
            </div>
            <Market productos={productosBuscados}/>
            <Footer />
            {isMobile && <Nava />}
        </div>
    )
}

export default Publicaciones