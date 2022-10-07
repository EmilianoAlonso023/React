import ItemList from "./ItemList"
import React, { useEffect, useState } from "react"
import { getProducts } from "./data/Products"
import { useParams } from "react-router-dom"


 const ItemListContainer = ( {greeting} ) => {
  const [items, setItems] = useState([])
  const {id } = useParams()
  useEffect( () =>{
    getProducts().then( res =>{
      const data = id ? res.filter(p => p.category===id) : res
      setItems( data )
    } )
    .catch( err => {
      console.log('err:' + err);
    })
  }, [id])
    return (
      <div className="m-5">
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
  }
  export default ItemListContainer