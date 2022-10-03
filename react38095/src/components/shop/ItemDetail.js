import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
 import { products } from './data/products' 

const ItemDetail = () => {

const { id: itemId } = useParams()
const [item, setItem] = useState({})

useEffect(() => {
    getItemsDetail().then( response =>{
    setItem( response )
    } )
  },  [])


const getItemsDetail = () => { 
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve ( products.find ( p=> p.id === Number(itemId) ) )
    }, 1500);
})
 }


  return (
    <div>
        <div>{ item.name }</div>
        <div>{ item.price }</div>
    </div>
  )
}
export default ItemDetail