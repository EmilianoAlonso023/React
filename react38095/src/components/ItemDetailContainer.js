import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../components/ItemDetail'

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams()

useEffect(() => {
      const getProducto = async () => {
        const queryRef = doc(db, "products", id);
        const response = await getDoc(queryRef);
        const newItem = {
          id: response.id,
          ...response.data(),
        };
        setTimeout(()=>{
          setItem(newItem);
        }, 2000)
      };
      getProducto();
    }, [id]);

  return (
    <ItemDetail item={item}/>
  )
  }
export default ItemDetailContainer