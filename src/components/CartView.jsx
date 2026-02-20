import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import { FiPlus, FiMinus, FiTrash2 } from 'react-icons/fi'

const CartView = () => {
    const {cart, removeItem, clear, totalAPagar, updateQuantity} = useContext(CartContext)

    const handleRemove = (compra) => {
        Swal.fire({
            title: '¿Eliminar producto?',
            text: `¿Querés quitar ${compra.name} del carrito?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(255, 177, 125)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) removeItem(compra.id)
        })
    }

    const handleClear = () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Se eliminarán todos los productos del carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'rgb(255, 177, 125)',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, vaciar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) clear()
        })
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
            <h1 style={{ marginBottom: '2rem' }}>Tu carrito 🛒</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cart.map((compra) => (
                    <div key={compra.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                        padding: '1rem 1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        background: 'white'
                    }}>
                        <img src={compra.img} alt={compra.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '12px' }}/>

                        <div style={{ flex: 1, textAlign: 'left' }}>
                            <p style={{ fontWeight: '700', margin: 0 }}>{compra.name}</p>
                            <p style={{ color: '#888', margin: 0, fontSize: '0.9rem' }}>${compra.price} c/u</p>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <button onClick={() => updateQuantity(compra.id, compra.quantity - 1)} style={{
                                background: 'none', border: '2px solid rgb(255, 177, 125)',
                                borderRadius: '50%', width: '32px', height: '32px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: 'rgb(255, 177, 125)'
                            }}>
                                <FiMinus size={14}/>
                            </button>
                            <span style={{ fontWeight: '600', minWidth: '20px' }}>{compra.quantity}</span>
                            <button onClick={() => updateQuantity(compra.id, compra.quantity + 1)} style={{
                                background: 'none', border: '2px solid rgb(255, 177, 125)',
                                borderRadius: '50%', width: '32px', height: '32px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', color: 'rgb(255, 177, 125)'
                            }}>
                                <FiPlus size={14}/>
                            </button>
                        </div>

                        <p style={{ fontWeight: '700', color: 'rgb(255, 177, 125)', minWidth: '100px', margin: 0 }}>
                            ${compra.price * compra.quantity}
                        </p>

                        <button onClick={() => handleRemove(compra)} style={{
                            background: 'none', border: 'none', cursor: 'pointer', color: '#d33'
                        }}>
                            <FiTrash2 size={20}/>
                        </button>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                <p style={{ fontSize: '1.3rem', fontWeight: '700' }}>Total a pagar: <span style={{ color: 'rgb(255, 177, 125)' }}>${totalAPagar()}</span></p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                <button className='btn btn-naranja' onClick={handleClear}>Vaciar Carrito</button>
                <Link className='btn btn-naranja' to='/checkout'>Terminar compra</Link>
            </div>
        </div>
    )
}

export default CartView