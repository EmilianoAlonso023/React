import React from 'react'
import ItemCard from './ItemCard'


const ItemList = ({items}) => {
  return (
    <div>
      <h1>Tienda</h1> 
      { items.map( item => <ItemCard key={item.id} {...item} /> )}
    </div>
  )
}

export default ItemList