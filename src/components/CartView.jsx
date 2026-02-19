import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'


const CartView = () => {
    const {cart, removeItem, clear, totalAPagar}= useContext(CartContext)
  return (
    <div>
        <h1>Tu carrito 🛒</h1>
    <div>
        {cart.map((compra)=>(
            <div key={compra.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                <img src={compra.img} alt={compra.name} style={{width:'10rem'}}/>
                <span>{compra.name}</span>
                <span>${compra.price}</span>
                <span>cantidad: {compra.quantity}</span>
                <span>precio final: ${compra.price * compra.quantity}</span>
                <span>cantidad: 
                <button className='btn btn-sm btn-outline-secondary' onClick={()=> updateQuantity(compra.id, compra.quantity - 1)}>-</button>
                <span className='mx-2'>{compra.quantity}</span>
                <button className='btn btn-sm btn-outline-secondary' onClick={()=> updateQuantity(compra.id, compra.quantity + 1)}>+</button>
</span>
                <button className='btn btn-danger' onClick={()=> removeItem(compra.id)}>X</button>
            </div>
        ))}
    </div>
    <span>Total a pagar: ${totalAPagar()},00</span>
    
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'80%', padding:'2rem'}}>
        <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
        <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
    </div>
    </div>
  )
}

export default CartView