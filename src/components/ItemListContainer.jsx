import { useEffect, useState } from "react"
import { getProducts, products } from "../asyncMock/data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemList from "./ItemList"
import Loader from "./Loader"
import { db } from "../service/firebase";
import { Link, useParams } from "react-router-dom"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
const ItemListContainer = ()=> {
const [data, setData] = useState([])
const [loading, setLoading]=useState(false)
const {type} = useParams()

useEffect(()=>{
        setLoading(true)
        //conecto a mi coleccion
    const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")
      // pido los documentos
    getDocs(prodCollection)
    .then((res)=>{//tratamos la promesa
        //limpiar y obtener los datos
        const list = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })
        setData(list)
        })
        .catch((error)=>console.log(error))//atrapar el error
        .finally(()=> setLoading(false))
        // console.log(getProducts())
    },[type])

return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando categoría' : 'Cargando productos'}/>
            : <div>
            <h1>{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            {/* {data.map((prod)=><div key={prod.id} >
                <p>Producto:{prod.name}</p>
                <p>${prod.price}</p>
            </div>)} */}
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer