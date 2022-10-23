import { createContext, useContext, useState } from "react";

export const CartContext = createContext()


export const CartProVider = ({Children}) => {
  const [cart, setCart]= useState([])

const addToCart = (item) => {
  setCart([...cart, item])
}
    return(
        <CartContext.Provider value={{cart, addToCart}}>
        {Children}
        </CartContext.Provider>
    )
}

export const useCart = ()  => useContext (CartContext)