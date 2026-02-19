import { createContext, useState } from "react";
import { toast, Flip } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, qty) => {
        if(isInCart(item.id)){
            setCart(
                cart.map((prod) => {
                    if (prod.id === item.id) {
                        if(prod.quantity + qty <= item.stock){
                            return {...prod, quantity: prod.quantity + qty}
                        } else {
                            toast.error(`No hay suficiente stock de ${item.name}`, {
                                position: "top-center",
                                autoClose: 2000,
                                theme: "colored",
                                transition: Flip,
                            })
                            return prod
                        }
                    } else {
                        return prod
                    }
                })
            )
        } else {
            setCart([...cart, {...item, quantity: qty}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const removeItem = (id) => {
        setCart(cart.filter((prod) => prod.id !== id))
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

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id)
    }

    const totalAPagar = () => {
        return cart.reduce((acc, prod) => acc += (prod.quantity * prod.price), 0)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, prod) => acc += prod.quantity, 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, totalAPagar, cartQuantity, updateQuantity}}>
            {children}
        </CartContext.Provider>
    )
}