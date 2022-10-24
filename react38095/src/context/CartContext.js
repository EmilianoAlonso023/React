import { createContext, useContext, useState } from "react";

export const CartContext = createContext()


export const CartProVider = ({Children}) => {
  const [cart, setCart]= useState([])

const addToCart = (item) => { 
  const itemInCart = cart.find((prod)=> prod.id===item.id)
if(itemInCart){
  const updatedCart = cart.map((prod)=>{
    if(prod.id === item.id){
      return {...prod, quantity: prod.quantity + item.quantity}
    }
  })
}else{
  setCart([...cart, item])
}

  
}
  const IsInCart = () => {
    return  cart.some((prod) => prod.id === id)

  }
  


    return(
        <CartContext.Provider value={{cart, addToCart, Is}}>
        {Children}
        </CartContext.Provider>
    )
}

export const useCart = ()  => useContext (CartContext)