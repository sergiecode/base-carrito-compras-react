import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { useContext } from "react"
import { CarritoContext } from "./context/CarritoContext"


export const BotonCarrito = () => {

  const { listaCompras, agregarCompra, eliminarCompra } = useContext (CarritoContext)

  return (
        <Badge badgeContent={listaCompras.length} color="primary">
            <ShoppingCart></ShoppingCart>
        </Badge>
  )
}
