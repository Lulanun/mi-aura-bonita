
import { createContext, useState } from "react";
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext()

export const CartProvider =({children}) =>{



const addItem = (item, qty)=>{
    if(isInCart(item.id)){
        setCart(
            cart.map((prod)=>{
                if (prod.id === item.id) {
                    if(prod.quantity + qty <= item.stock){
                        return {...prod, quantity: prod.quantity + qty}
                    } else {
                        toast.error(`No hay suficiente stock de ${item.name}. No se guardaron los cambios`)
                        return prod
                    }
                } else {
                    return prod
                }
            })
        )
    } else {
        setCart([...cart,{...item, quantity:qty}])
    }
}

const clear=()=>{
    setCart([])
}

const removeItem = (id)=>{
    setCart(cart.filter((prod)=>prod.id !== prod.id))
}

const isInCart = (id) =>{
return cart.some((prod)=> prod.id === id)
}
const updateQuantity = (id, qty) => {
    setCart(
        cart.map((prod) => {
            if (prod.id === id) {
                if (qty < 1 || qty > prod.stock) return prod
                return { ...prod, quantity: qty }
            } else {
                return prod
            }
        })
    )
}

const totalAPagar = ()=>{
return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0 )
}

const cartQuantity = ()=> {
return cart.reduce((acc, prod)=> acc += prod.quantity,0)
}


    const[cart, setCart]=useState([])
    return(
<CartContext.Provider value={{cart, addItem, clear, removeItem, totalAPagar, cartQuantity, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}