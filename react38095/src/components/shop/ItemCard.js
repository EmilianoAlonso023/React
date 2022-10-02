import React, {} from 'react'


const ItemCard = ( {id, name, price} ) => {
  return (
    
    <div className='m-5'>
       <div>{id}</div>
        <div>{name}</div>
        <div>{price}</div>
    </div>
    
  )
}
export default ItemCard