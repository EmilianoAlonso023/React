import React from 'react'
import ItemCount from '../ItemCount' 


const ItemDetail = ({item}) => {
  const onAdd = () => {
    console.log('compraste')
  }

  return (
    <div>
       
        <div>{ item.name }</div>
        <div>{ item.price }</div>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
    </div>
  )
}
export default ItemDetail