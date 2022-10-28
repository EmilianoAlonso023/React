import React from 'react'
import { Link } from 'react-router-dom'


const ItemCard = ( {id, name, price, pictureUrl} ) => {
  return (
    <Link to={`/item/${id}`}>
      <img src={pictureUrl} />
      <div className='m-5'>
       <div>{id}</div>
        <div>{name}</div>
        <div>{price}</div>
      </div>
    </Link>
  )
}
export default ItemCard
