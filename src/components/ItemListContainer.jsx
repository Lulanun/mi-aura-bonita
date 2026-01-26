import { useEffect, useState } from "react"
import { getProducts } from "../asyncMock/data"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemList from "./ItemList"

import { Link, useParams } from "react-router-dom"
const ItemListContainer = ({subtitulo, texto})=> {
const [data, setData] = useState([])
const {type} = useParams()

    useEffect(()=>{
    getProducts()//retorna la promesa
    .then((res)=> {
        if (type){
        setData(res.filter((prod)=>prod.category === type))
        } else {
        setData(res)}
    })// trata la promesa y guardo la res en un estado
    .catch((error)=> console.log(error))
     },[type])
    return(   
        <div>
           <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer
