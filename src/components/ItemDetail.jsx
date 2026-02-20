import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ItemCount from './ItemCount'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ItemDetail = ({ product }) => {
const {addItem, cart} = useContext(CartContext)
const productInCart = cart.find((prod) => prod.id === product.id)
const currentQuantity = productInCart ? productInCart.quantity : 1


  const onAdd = (cantidad) => {
    addItem(product, cantidad)
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

        <ItemCount stock={product.stock} onAdd={onAdd} initialCount={currentQuantity}/>
        </div>
      </div>

    </div>
  )
}

export default ItemDetail