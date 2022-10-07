import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getItemsDetail } from './data/Products'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    
const { id: itemId } = useParams()
const [item, setItem] = useState({})

useEffect(() => {
    getItemsDetail(itemId).then( response =>{
    setItem( response )
    } )
  },  [])

  return (
    <ItemDetail item={item}/>
  )
}
export default ItemDetailContainer