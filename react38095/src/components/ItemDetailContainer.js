import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../components/ItemDetail'

useEffect(() => {
  // crea una función que se va a encargar de traernos el producto
      const getProducto = async () => {
  // creas una variable que traiga de la base de datos los productos que coincidan con el id del parámetro (useParams)
        const queryRef = doc(db, "products", id);
  // guardarlos en una variable
        const response = await getDoc(queryRef);
  // una vez que los tenés, crea un nuevo objeto con ese dato.
        const newItem = {
          id: response.id,
          ...response.data(),
        };
        setTimeout(()=>{
  // y seteas el estado
          setItem(newItem);
        }, 2000)
      };
  // llama a la función
      getProducto();
    }, [id]);

  return (
    <ItemDetail item={item}/>
  )

export default ItemDetailContainer