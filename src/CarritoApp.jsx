import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { ComprasPage } from "./components/pages/ComprasPage"
import { CarritoPage } from "./components/pages/CarritoPage"
import { ProductosProvider } from "./components/context/ProductosProvider"
import { CarritoProvider } from "./components/context/CarritoProvider"

export const CarritoApp = () => {
  return (
    <ProductosProvider>
      <CarritoProvider>
        <NavBar></NavBar>

        <div className="container">
          <Routes>
            <Route path='/' element={<ComprasPage></ComprasPage>}></Route>
            <Route path='/carrito' element={<CarritoPage></CarritoPage>}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
          </Routes>
        </div>
      </CarritoProvider>
    </ProductosProvider>
  )
}
