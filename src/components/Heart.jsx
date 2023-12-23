import React, { useEffect } from 'react'
import { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import { useContext } from 'react';
import Context from '../Context/MyContext';

function Heart({ id_producto, id_usuario }) {
  const urlServer = "https://todomercado.onrender.com";
  const endpoint = `/favoritos`;

  // console.log(id_producto)
  const usuarioContext = useContext(Context);
  const { esFavoritos, setEsFavoritos } = usuarioContext;
  // Verificar si el id del producto actual está en la lista de favoritos
  const esFavoritoActual = esFavoritos.some(favorito => favorito.id_producto === id_producto);
  // console.log(`el estado de favoritos es: ${esFavoritoActual}`)
  const heartColor = esFavoritoActual ? 'red' : 'white';
  //verificacion de contendio de favoritos
  // console.log('Contenido de esFavoritos:');
  // esFavoritos.forEach(favorito => {
  //   console.log(favorito);
  // });

  const ids = {usuario: id_usuario, producto: id_producto}

  const agregarFavorito = async () => {
    try {
      // console.log(`producto: ${id_producto} usuario: ${id_usuario}`);
      const response = await axios.post(urlServer + endpoint, { id_usuario, id_producto });
      // Actualizar el estado de esFavoritos si es necesario
      setEsFavoritos([...esFavoritos, { id_producto }]); // Agregar el nuevo favorito al estado
    } catch (error) {
      console.error('Error al gusrdar favoritos del usuario:', error);
    }
  };

  const eliminarFavorito = async () => {
    try {
      console.log(`usuario: ${id_usuario} producto: ${id_producto}`)
      const response = await axios.delete(`${urlServer}${endpoint}/${id_usuario}/${id_producto}`);
      // Actualizar el estado de esFavoritos si es necesario
      const nuevosFavoritos = esFavoritos.filter(favorito => favorito.id_producto !== id_producto);
      setEsFavoritos(nuevosFavoritos); // Actualizar el estado excluyendo el favorito eliminado
    } catch (error) {
      console.error('Error al gusrdar favoritos del usuario:', error);
    }
  };

  const handleClick = () => {
    // Evaluar el color actual y ejecutar la función correspondiente
    if (heartColor === 'red') {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
  };

  return (
    <FaHeart className="heartIcon" style={{ color: heartColor }} onClick={handleClick} />

  );
}

export default Heart;
