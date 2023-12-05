import React from 'react'
import Nava from "../components/Nava";
import Market  from '../components/Market';
import NavaDesk from '../components/NavaDesk';
import { useMediaQuery } from 'react-responsive';

function Favoritos() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <div>
      {!isMobile && <NavaDesk />}
      <div id='h1Titulo'>
        <h1>Favoritos</h1>
      </div>
      <Market />
      {isMobile && <Nava />}
    </div>
  )
}

export default Favoritos