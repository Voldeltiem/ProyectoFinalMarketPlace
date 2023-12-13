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

function Inicio() {
  const [productos, setProductos] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const urlServer = "http://localhost:3000";
  const endpoint = `/`;

  useEffect(() => {
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
      {!isMobile && <Section />}
      {isMobile && <Titulo />}
      {isMobile && <Nava />}
      <Market productos={productos} />
      <Footer />
    </div>
  )
}

export default Inicio