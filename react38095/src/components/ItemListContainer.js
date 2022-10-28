import ItemList from "./ItemList"
import React, { useEffect, useState } from "react"
/* import { getProducts } from "./Products"  */
import { useParams } from "react-router-dom"
import { db } from '../index'
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams()

useEffect(() => {
      const getData = async () => {
        const queryRef = !categoryId
          ? collection(db, "items")
          : query(
              collection(db, "items"),
              where("categoryId", "==", categoryId)
            );
        const response = await getDocs(queryRef);
        const productos = response.docs.map((doc) => {
          const newProduct = {
            ...doc.data(),
            id: doc.id,
          };
          return newProduct;
        });
        setTimeout(()=>{
          setItems(productos);
        }, 2000)
  
      };
      getData();
    }, [categoryId]);


    return (
      <div className="m-5">
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
    }

  export default ItemListContainer