import { createContext, useContext, useState } from "react";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


const addToCart = (chosenItem, quantity) => {
    const item = {
      ...chosenItem,
      quantity
    }     
    if(isInCart(item.id)){
     const updatedCart= cart.map(element => {
          if(element.id === item.id)  {
              return{...element, quantity: element.quantity += item.quantity}
            
          }else{
              return item
          }
          
      })
  setCart(updatedCart)
  }
  else {
    setCart([...cart, item])   
      }
  console.log("newObject", cart);
}

return (
<>
<cartContext.Provider value= {{addToCart}}>
{props.children}
</cartContext.Provider>   
</>
   )
}
export {CartProvider, useCart}

