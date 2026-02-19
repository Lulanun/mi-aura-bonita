import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ItemCount from './ItemCount'
//para poder utilizar las herramientas del contexto necesito usar el hook usecontext e importar el contexto que quiera usar.
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({ product }) => {
//const context = useContext()
const [purchase, setPurchase]= useState(false)
const {addItem, cart} = useContext(CartContext)
  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} de ${product.name}`)
    addItem(product, cantidad)
    setPurchase(true)
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-3">{product.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.img}
            alt={product.name}
            width={400}
            height={200}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <Tabs defaultActiveKey="detalle" className="mb-3">

            <Tab eventKey="detalle" title="Detalle">
              <p>{product.description}</p>
              <p><strong>Precio:</strong> ${product.price}</p>
              <p><strong>Stock:</strong> {product.stock} unidades</p>
            </Tab>

            <Tab eventKey="beneficios" title="Beneficios">
            {product.beneficios}
            <p><strong>Precio:</strong> ${product.price}</p>
            <p><strong>Stock:</strong> {product.stock} unidades</p>
            </Tab>

          </Tabs>

          <ItemCount stock={product.stock} onAdd={onAdd} />
        </div>
      </div>

    </div>
  )
}

export default ItemDetail