import React from 'react'


const ItemDetail = ({item}) => {

  return (
    <div>
        <div>{ item.name }</div>
        <div>{ item.price }</div>
    </div>
  )
}
export default ItemDetail