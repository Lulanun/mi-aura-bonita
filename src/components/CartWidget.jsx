import { BsCartCheck } from "react-icons/bs";
import { FaBeer } from 'react-icons/fa';
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const CartWidget = () => {
    const {cart, cartQuantity} = useContext(CartContext)
    return(
        <div style={{position: 'relative', display: 'inline-block'}}>
            <BsCartCheck fontSize={'30px'} color='rgb(255, 177, 125)'/>
            {cart.length > 0 && 
                <span style={{color:'rgb(255, 177, 125)', fontWeight:'bold'}}>
                    {cartQuantity()}
                </span>
            }
        </div>
    )
}
export default CartWidget