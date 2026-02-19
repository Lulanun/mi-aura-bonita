import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
//import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';
//importamos al proveedor
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';
import Checkout from './components/Checkout';
import { ToastContainer, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
       {/* Esto va para la proxima entrega <ItemCount stock={10}/> */}
  <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a Mi Aura Bonita' />}/>
        <Route path='/category/:type' element={ <ItemListContainer saludo='Estas en la categoria: ' />}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<Error/>}/>
     </Routes>
        <ToastContainer position="top-center" autoClose={2000} theme="colored" transition={Flip}/>
      </CartProvider>
  </BrowserRouter>
    </>
  )
}

export default App