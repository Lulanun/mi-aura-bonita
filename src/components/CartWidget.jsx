import { BsCartCheck } from "react-icons/bs";
import { FaBeer } from 'react-icons/fa';
const CartWigdet = ()=>{
    return(
        <div>
            <BsCartCheck fontSize={'50px'} color='green'/>
            <span style={{color:'green', fontWeight:'bold'}}>3</span>
        </div>
    )
}

export default CartWigdet