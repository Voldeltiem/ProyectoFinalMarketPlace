import React from 'react'
import Section from "../components/Section"
import Market from "../components/Market"
import Footer from "../components/Footer"
import Nava from "../components/Nava"
import NavaDesk from '../components/NavaDesk'
import Titulo from '../components/Titulo'
import { useMediaQuery } from 'react-responsive';
import { useEffect, useState } from 'react';
import axios from 'axios';  // Importa Axios
import { useContext } from 'react';
import Context from '../Context/MyContext';


function Inicio() {
  const usuarioContext = useContext(Context);
  const { productosBuscados, setProductosBuscados, productosBase, setProductosBase } = usuarioContext; //estado global
  const [productos, setProductos] = useState([]);
  const [marketKey, setMarketKey] = useState(0); // Estado local para cambiar la clave
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const urlServer = "https://todomercado.onrender.com";
  const endpoint = `/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(urlServer + endpoint);
        setProductosBase(response.data);
        setProductos(response.data);
        // Actualizar la clave del componente Market cada vez que hay nuevos datos
        setMarketKey((prevKey) => prevKey + 1);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {!isMobile && <NavaDesk />}
      {!isMobile && <Section />}
      {isMobile && <Titulo />}
      {isMobile && <Nava />}
      <Market key={marketKey} productos={productosBuscados} />
      <Footer />
    </div>
  )
}

export default Inicio