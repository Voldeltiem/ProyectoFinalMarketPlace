import React from 'react'
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import axios from 'axios';

function Heart({ id_usuario, id_producto, isFavoritoInicial }) {
  const [isFavorito, setIsFavorito] = useState(isFavoritoInicial);

  const agregarFavorito = async () => {
    try {
      // Realizar la solicitud Axios para agregar o quitar el favorito según el estado actual
      if (isFavorito) {
        // Si ya está marcado como favorito, quitarlo
        await axios.delete(`/favoritos`, {id_usuario, id_producto});
      } else {
        // Si no está marcado como favorito, agregarlo
        await axios.post(`/favoritos`, { id_usuario, id_producto });
      }

      // Actualizar el estado local para reflejar el cambio
      setIsFavorito(!isFavorito);
    } catch (error) {
      console.error('Error al realizar la operación de favoritos:', error);
    }
  };

  return (
    <CiHeart className={`heartIcon ${isFavorito ? 'favorito' : ''}`} onClick={agregarFavorito} />
  );
}

export default Heart;
