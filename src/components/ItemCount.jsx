import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi"

const ItemCount = ({stock, onAdd, initialCount = 1})=> {
const [counter, setCounter] = useState(initialCount)

    const sumar = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const restar = () => {
        if(counter > 1){
            setCounter(counter - 1)
        }
    }

    return(
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1rem' }}>
            <button 
                onClick={restar} 
                disabled={counter === 1}
                style={{
                    background: 'none',
                    border: '2px solid rgb(255, 177, 125)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgb(255, 177, 125)'
                }}>
                <FiMinus size={18}/>
            </button>

            <span style={{ fontSize: '1.2rem', fontWeight: '600', minWidth: '24px', textAlign: 'center' }}>
                {counter}
            </span>

            <button 
                onClick={sumar}
                disabled={counter === stock}
                style={{
                    background: 'none',
                    border: '2px solid rgb(255, 177, 125)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'rgb(255, 177, 125)'
                }}>
                <FiPlus size={18}/>
            </button>

            <button 
                className="btn btn-naranja"
                onClick={() => onAdd(counter)} 
                disabled={counter === 0 || stock === 0}>
                Comprar
            </button>
        </div>
    )
}

export default ItemCount