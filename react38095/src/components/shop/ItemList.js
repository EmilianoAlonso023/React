import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"
import ItemDetail from "./ItemDetail"

const products = [
    { id: 1, name:'pc', price:'80000'},
    { id: 2, name:'notebook', price:'120000'},
    { id: 3, name:'monitores', price:'50000'},
    { id: 4, name:'playstation', price:'250000'},
    { id: 5, name:'xbox', price:'250000'},
] 


const getProducts = () => {
  return  new Promise( (resolve)=>{
  setTimeout( () =>{
    resolve( products )
  },  3000)
  })


    
}

  return (
    <div>
      <h1>Tienda</h1> 
      { items.map( item => <ItemCard key={item.id} {...item} /> )}
      </div>
  )

export default ItemList