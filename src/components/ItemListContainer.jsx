import { useEffect, useState } from "react"
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

    const prodCollection = type ? query(collection(db, "productos"), where("category", "==", type)) : collection(db, "productos")

    getDocs(prodCollection)
    .then((res)=>{
        const list = res.docs.map((doc)=>{
            return{
                id:doc.id,
                ...doc.data()
            }
        })
        setData(list)
        })
        .catch((error)=>console.log(error))
        .finally(()=> setLoading(false))
    },[type])

return(
        <>
        {
            loading 
            ? <Loader text={type ? 'Cargando categoría' : 'Cargando productos'}/>
            : <div>
            <h1>{type && <span style={{textTransform:'capitalize'}}>{type}</span>}</h1>
            <ItemList data={data}/>
        </div>
        }
        </>
    )
}

export default ItemListContainer