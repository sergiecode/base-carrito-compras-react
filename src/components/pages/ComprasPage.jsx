import { useContext, useState } from "react"
import { Card } from "../Card"
import { ProductosContext } from "../context/ProductosContext"
import { CarritoContext } from "../context/CarritoContext"

export const ComprasPage = () => {

  const { productos } = useContext(ProductosContext)
  const { agregarCompra, eliminarCompra } = useContext(CarritoContext)
  const handleAgregar = (p) => {
    agregarCompra(p)
  }
  const handleQuitar = (id) => {
    eliminarCompra(id)
  }

  return (
    <>
      <hr />
      <h4>Compras: </h4>
      <hr />

      {productos.map(producto => (
        <Card
          key={producto.id}
          imagen={producto.image}
          titulo={producto.title}
          descripcion={producto.description}
          precio={producto.price}
          handleAgregar={() => handleAgregar(producto)}
          handleQuitar={() => handleQuitar(producto.id)}
          >
        </Card>
      ))}

    </>
  )
}
