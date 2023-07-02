import { useState } from 'react'
import '../styles/card.css'

export const Card = ({ imagen, titulo, descripcion, precio, handleAgregar, handleQuitar }) => {

  const [added, setAdded] = useState(false)

  const clickAgregar = () =>{
    setAdded(true)
    handleAgregar()
  }
  const clickQuitar = () =>{
    setAdded(false)
    handleQuitar()
  }


  return (
    <div className="tarjeta">
      <img src={imagen} alt="Imagen del producto" className="tarjeta-imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>

        {added
          ?
          <button
            type="button"
            className="boton-quitar"
            onClick={clickQuitar}
          >Quitar del Carrito</button>
          :
          <button
            type="button"
            className="boton-agregar"
            onClick={clickAgregar}
          >Agregar al Carrito</button>

        }
      </div>
    </div>
  )
}
