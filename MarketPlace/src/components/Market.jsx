//donde se ven la publicaciones en miniatura
import React from 'react'
import Tarjeta from "./Tarjeta"

function Market({ productos }) {
  // Verifica si productos no es un array
  if (!Array.isArray(productos)) {
    console.error("Error: productos no es un array");
    return null; // O puedes mostrar un mensaje de error o hacer algo más aquí
  }
  return (
    <div id='market'>
      {productos.map(producto => (
        <Tarjeta key={producto.id} producto={producto} />
      ))}
    </div>
  )
}

export default Market