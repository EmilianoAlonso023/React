import ItemList from "./ItemList"
import React, { useEffect, useState } from "react"
import { getProducts } from "./data/Products"


 const ItemListContainer = ( {greeting} ) => {
  const [items, setItems] = useState([])

  useEffect( () =>{
    getProducts().then( res =>{
      setItems( res )
    } )
    .catch( err => {
      console.log('err:' + err);
    })
  }, [])
    return (
      <div className="m-5">
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
  }
  export default ItemListContainer