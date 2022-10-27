import React from 'react' 
import ItemCount from './ItemCount' 
import { useCart } from '../context/CartContext'



const ItemDetail = ({item}) => {
  const{addToCart} = useCart () 
  const onAdd = (cantidad) => {
    addToCart(item, cantidad)
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