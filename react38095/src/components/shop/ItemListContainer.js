 /* import { getProducts } from "./data/Products" */
import ItemList from "./ItemList"
import { useEffect, useState } from "react"


  const [items, setItems] = useState([])

  useEffect( () =>{
    getProducts().then( res =>{
      setItems( res )
    } )
    .catch( err => {
      console.log('err:' + err);
    })
  }, [])



 const ItemListContainer = ( {greeting} ) => {
    return (
      <div className="m-5">
        <h1>{greeting}</h1>
        <ItemList/>
        </div>
    )
  }
  export default ItemListContainer  