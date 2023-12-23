//donde se ven la publicaciones en miniatura
import React from 'react'
import Tarjeta from "./Tarjeta"
import { useContext } from 'react';
import Context from '../Context/MyContext';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


function Market({ productos }) {
  const usuarioContext = useContext(Context);
  const { usuario, setUsuario, esFavoritos, setEsFavoritos } = usuarioContext;
  const urlServer = "https://todomercado.onrender.com";
  const endpoint = `/favoritosusuario`;

  // Verifica si productos no es un array
  if (!Array.isArray(productos)) {
    console.error("Error: productos no es un array");
    return null;
  }
  const obtenerFavoritos = async () => {
    const id_usuario = usuario.id_usuario;

    try {
      // console.log(`id del usuario ${id_usuario}`)
      const response = await axios.post(urlServer + endpoint, { id_usuario });
      const favoritos = response.data.favoritos;
      console.log(`favoritos del usuario ${favoritos.length}`)
      setEsFavoritos(favoritos);
    } catch (error) {
      console.error('Error al obtener favoritos del usuario:', error);
    }
  };

  useEffect(() => {
    obtenerFavoritos()
  }, []);
  //verificacion de contendio de favoritos
  // console.log('Contenido de esFavoritos:');
  // esFavoritos.forEach(favorito => {
  //   console.log(favorito);
  // });

  return (
    <div id='market'>
      {productos.map(producto => (
        <Tarjeta key={producto.id_producto} producto={producto} />
      ))}
    </div>
  )
}

export default Market