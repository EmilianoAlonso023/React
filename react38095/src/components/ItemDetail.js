import React, { useState } from 'react'
import ItemCount from './ItemCount' 
import { useCart } from '../context/CartContext'




/*  const{addToCart} = useCart () 
const ItemDetail = ({item}) => {
  const onAdd = () => {
    addToCart(item)
  }

  return (
    <div>
       
        <div>{ item.name }</div>
        <div>{ item.price }</div>
        <ItemCount stock={item.stock} onAdd={onAdd}/>
    </div>
  )
} */
  

export default ItemDetail