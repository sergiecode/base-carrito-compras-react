import { useContext } from "react"
import { CarritoContext } from "./context/CarritoContext"
import '../styles/lista.css'

export const ListaCompras = () => {
    const { listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, reducirCantidad } = useContext(CarritoContext)

    const handleAumentar = (id) => {
        aumentarCantidad(id)
    }
    const handleReducir = (id) => {
        reducirCantidad(id)
    }
    const handleEliminar = (id) => {
        eliminarCompra(id)
    }

    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.price * item.cantidad, 0).toFixed(2)
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {listaCompras.map(item => (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>
                                <button className="btn btn-outline-primary" onClick={() => handleReducir(item.id)}>-</button>
                                <button className="btn btn-primary">{item.cantidad}</button>
                                <button className="btn btn-outline-primary" onClick={() => handleAumentar(item.id)}>+</button>

                            </td>
                            <td><button className="btn btn-danger" onClick={() => handleEliminar(item.id)}>Eliminar</button></td>
                        </tr>
                    ))}
                    <tr>
                        <th scope="row">TOTAL:</th>
                        <td></td>
                        <td>${calcularTotal()}</td>
                        <td></td>
                    </tr>
                </tbody>

            </table>

            <div className="d-grid gap-2">
                <button className="btn btn-primary" onClick={() => print()}>COMPRAR</button>
            </div>
        </>

    )
}
