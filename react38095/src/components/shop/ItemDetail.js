import React from 'react'
import ItemCount from '../ItemCount' 


const ItemDetail = ({item}) => {

  return (
    <div>
        <div>{ ItemCount }</div>
        <div>{ item.name }</div>
        <div>{ item.price }</div>
    </div>
  )
}
export default ItemDetail