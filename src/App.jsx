import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
//import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Navbar from "./components/Navbar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './components/Error';


function App() {
const greeting ='Nos estamos renovando... volve pronto!'
  return (
    <>
       {/* Esto va para la proxima entrega <ItemCount stock={10}/> */}
  <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer saludo='Bienvenidos a mi App!' />}/>
        <Route path='/category/:type' element={ <ItemListContainer saludo='Estas en la categoria: ' />}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App