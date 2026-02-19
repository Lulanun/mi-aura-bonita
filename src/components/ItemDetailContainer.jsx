import React, { useEffect, useState } from 'react'
import { getOneProduct, getProducts } from '../asyncMock/data'
import { Link, useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'
import Loader from "./Loader"

const ItemDetailContainer = () => {
    const [detail, setDetail]= useState({})
    const[cargando, setCargando]=useState(true)
    const [invalid, setInvalid] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
      const docRef = doc(db, "productos", id)
      getDoc(docRef)
      .then((res)=> {
        if(res.data()){
          setDetail({
          id:res.id,
          ...res.data()
        })
        setInvalid(false)
        }else{
          setInvalid(true)
        }
      })
        .catch((error)=> console.log(error))
        .finally(()=> setCargando(false))
    },[id])
  if(invalid){
  return(
    <div>
      <h2>El producto que esta buscando no existe.</h2>
      <Link className='btn btn-dark' to='/'>Volver a Home</Link>
    </div>
  )
}
  return (
    <>
      {cargando ? <Loader text='Cargando detalle...'/> : <ItemDetail product={detail}/>} 
    </>
  )
}

export default ItemDetailContainer