import React from 'react'
import Section from "../components/Section"
import Market from "../components/Market"
import Footer from "../components/Footer"
import Nava from "../components/Nava"
import NavaDesk from '../components/NavaDesk'
import Titulo from '../components/Titulo'
import { useMediaQuery } from 'react-responsive';

function Inicio() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <div>
       {!isMobile && <NavaDesk />}
       {!isMobile && <Section />}
       {isMobile && <Titulo />}
       {isMobile && <Nava />}
      <Market/>
      <Footer/>
    </div>
  )
}

export default Inicio