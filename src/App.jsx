import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBeer } from 'react-icons/fa';
//import ItemCount from './components/ItemCount'
import ItemListContainer from './components/ItemListContainer'
import Navbar from "./components/Navbar"

function App() {

const greeting ='Nos estamos renovando... volve pronto!'
console.log('App')
  return (
    <>
      <Navbar/>
       {/* Esto va para la proxima entrega <ItemCount stock={10}/> */}
      <ItemListContainer subtitulo='Productos con Intencion y Equilibrio' texto={greeting}/>
    </>
  )
}

export default App