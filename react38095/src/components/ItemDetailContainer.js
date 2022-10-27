import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../index'
import ItemDetail from '../components/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = ({ greeting }) => {
  const [item, setItem] = useState([]);
  const { id } = useParams()

useEffect(() => {
      const getProducto = async () => {
        const queryRef = doc(db, "items", id);
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