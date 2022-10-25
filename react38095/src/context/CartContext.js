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
    }else{
      return prod
    }
    
  })
  setCart(updatedCart)
}else{
  setCart([...cart, item])
}

  
}
  const IsInCart = (id) => {
    return  cart.some((prod) => prod.id === id)

  }
const emptyCart = () => {
  setCart([])
}

const removeItem = (id) => {
setCart(cart.filter((prod) => prod.id !== id))
}

const cartQuantity = () => {
  return cart.reduce((acc, prod) => acc += prod.quantity,0) 
}

const cartTotal = () => {
  return cart.reduce((acc, prod)=> acc += prod.price * prod.quantity,0)
}

    return(
        <CartContext.Provider value={{cart, addToCart, IsInCart, emptyCart, removeItem, cartQuantity, cartTotal}}>
        {Children}
        </CartContext.Provider>
    )
}

export const useCart = ()  => useContext (CartContext)