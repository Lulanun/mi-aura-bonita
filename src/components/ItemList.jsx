import React from 'react'
import Item from './Item'

const ItemList = ({data}) => {
  const sortedData = [...data].sort((a, b) => {
    if (a.stock === 0 && b.stock !== 0) return 1
    if (a.stock !== 0 && b.stock === 0) return -1
    return 0
  })
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap', gap:'1rem'}}>
      {sortedData.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList