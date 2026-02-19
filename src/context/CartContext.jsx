//crear conexto
import { createContext, useState } from "react";

export const CartContext = createContext()
//crear el proveedor 
export const CartProvider =({children}) =>{
    //funciones(herramientas) para poder interactuar con elcarrito

//agregar productos al carrito (se usa en ItemDetail)
const addItem = (item, qty)=>{
if(isInCart(item.id)){
    //modifico cantidades
    setCart(
        cart.map((prod)=>{
            if (prod.id=== item.id) {
                //Sumo cantidades
                return {...prod, quantity:prod.quantity + qty}
            } else {
                return prod
            }
        })
    )
}  else{
    setCart([...cart,{...item, quantity:qty}])
}
}
//vaciar carrito (se usa en cart y checkout)
const clear=()=>{
    setCart([])
}
//eliminar algo del carrito (se usa een Cart)
const removeItem = (id)=>{
    setCart(cart.filter((prod)=>prod.id !== prod.id))
}

const isInCart = (id) =>{
return cart.some((prod)=> prod.id === id)
}

const totalAPagar = ()=>{
return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),0 )
}

// const totalConImpuestos = ()=> {
// return cart.reduce((acc, prod)=> acc += (prod.quantity * prod.price),1.5 )
// }

    //funcion que sume cantidades
const cartQuantity = ()=> {
return cart.reduce((acc, prod)=> acc += prod.quantity,0)
}


    const[cart, setCart]=useState([])
    return(
<CartContext.Provider value={{cart, addItem, clear, removeItem, totalAPagar, cartQuantity}}>
            {children}
        </CartContext.Provider>
    )
}