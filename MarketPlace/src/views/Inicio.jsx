import React from 'react'
import Section from "../components/Section"
import Market from "../components/Market"
import Footer from "../components/Footer"
import Nava from "../components/Nava"
import NavaDesk from '../components/navaDesk'
import Titulo from '../components/titulo'
import { useMediaQuery } from 'react-responsive';

function Inicio() {
  const isMobile = useMediaQuery({ maxWidth: 768 })
  return (
    <div>
       {!isMobile && <NavaDesk />}
       {!isMobile && <Section />}
      <Titulo/>
      <Nava/>
      <Market/>
      <Footer/>
    </div>
  )
}

export default Inicio