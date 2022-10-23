import ItemList from "./ItemList"
import React, { useEffect, useState } from "react"
import { getProducts } from "./Products"
import { useParams } from "react-router-dom"

useEffect(() => {
  // crear la función que va a trabajar el asincronismo.
      const getData = async () => {
  // empezar a preguntar, si no hay categorías, que nos traiga todos los productos
        const queryRef = !categoryId
          ? collection(db, "items")
  // si hay categorías, hace la comparación entre categorías de los productos y el parámetro. Nos trae solo los productos con esa categoría
          : query(
              collection(db, "items"),
// yo puse categoryId, no sé con que nombre lo creaste vos en firebase
              where("categoryId", "==", categoryId)
            );
  // recibe los productos y los guarda en una constante
        const response = await getDocs(queryRef);
  // mapea, crea un nuevo objeto con los productos y los guarda en una variable
        const productos = response.docs.map((doc) => {
          const newProduct = {
            ...doc.data(),
            id: doc.id,
          };
  // retorna los productos
          return newProduct;
        });
        setTimeout(()=>{
  // dentro del setTimeout, setea los productos que recibió. Ya sea todos (para mostrarlos en home), o por categorías (para mostrarlos en NavBar).
          setItems(productos);
        }, 2000)
  
      };
  // llama a la función.
      getData();
    }, [categoryId]);


    return (
      <div className="m-5">
        <h1>{greeting}</h1>
        <ItemList items={items}/>
        </div>
    )
  

  export default ItemListContainer