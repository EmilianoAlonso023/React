import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const products = [
    { id: 1, name:'pc', price:'80000'},
    { id: 2, name:'notebook', price:'120000'},
    { id: 3, name:'monitores', price:'50000'},
]

const ItemList = () => {

  const [items, setItems] = useState([])

  useEffect( () =>{
    getProducts().then( res =>{
      setItems( res )
    } )
    .catch( err => {
      console.log('err:' + err);
    })
  }, [])
   
const getProducts = () => {
  return  new Promise( (resolve)=>{
  setTimeout( () =>{
    resolve( products )
  },  3000)
  })


    
}

  return (
    <div>
      <h1>Componentes de ItemList</h1> 
      { items.map( item => <ItemCard key={item.id} {...item} /> )}
      </div>
  )
}
export default ItemList