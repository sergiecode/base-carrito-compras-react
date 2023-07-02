import { useReducer } from 'react'
import { CarritoContext } from './CarritoContext'

const initialState = []


export const CarritoProvider = ({ children }) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CARRITO] Agregar Compra':
                return [...state, action.payload]
            case '[CARRITO] Aumentar Cantidad Compra':
                return state.map(s => {
                    const cant = s.cantidad +1
                    if(s.id == action.payload) return {...s, cantidad: cant}
                    return s
                })
            case '[CARRITO] Reducir Cantidad Compra':
                return state.map(s => {
                    const cant = s.cantidad - 1
                    if(s.id == action.payload && s.cantidad > 1) return {...s, cantidad: cant}
                    return s
                })
                return state
            case '[CARRITO] Eliminar Compra':
                return state.filter(Compra => Compra.id !== action.payload)
            default:
                return state
        }
    }

    const [listaCompras, dispatch] = useReducer(comprasReducer, initialState)

    const agregarCompra = (compra) => {
        compra.cantidad = 1
        const action = {
            type: '[CARRITO] Agregar Compra',
            payload: compra
        }
        dispatch(action)
    }

    const aumentarCantidad = (id) => {
        const action = {
            type: '[CARRITO] Aumentar Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }
    const reducirCantidad = (id) => {
        const action = {
            type: '[CARRITO] Reducir Cantidad Compra',
            payload: id
        }
        dispatch(action)
    }

    const eliminarCompra = ( id ) => {
        const action = {
            type: '[CARRITO] Eliminar Compra',
            payload: id
        }
        dispatch(action)
    }

    return (
        <CarritoContext.Provider value={{ listaCompras, agregarCompra, eliminarCompra, aumentarCantidad, reducirCantidad }}>
            {children}
        </CarritoContext.Provider>
    )
}
