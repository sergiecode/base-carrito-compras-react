import { useContext } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Card } from "../Card"
import { ListaCompras } from "../ListaCompras"

export const CarritoPage = () => {

  // const {listaCompras} = useContext(CarritoContext)

  return (
    <>

    <h4>Lista de Compras</h4>
    <hr />

    <ListaCompras></ListaCompras>

    </>
  )
}
