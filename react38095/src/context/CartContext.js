import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {

    const [ItemsCart, setItemsCart] = useState([])

    const addToCart = (chosenItem, quantity) => {
          const cart = {
            ...chosenItem,
            quantity
          }     
          if(isInCart(cart.id)){
            ItemsCart.map(element => { 
                if(element.id === cart.id)  {
                  console.log("ver elemtno quantity", element.quantity)
                  console.log("ver cart quantity", cart.quantity)

                  element.quantity += cart.quantity
                  console.log ("entre al if del cart")
                }
                return(element)
            })
        
        }
        else 
        {console.log ("construcotr",cart)
        setItemsCart(ItemsCart => ItemsCart.concat(cart))    
            }
        console.log("Ver mi array de items", ItemsCart);
    }
        
    const removeItem = (unchosenItemId) => {
         const deletedItem = ItemsCart.filter(item => item.id !== unchosenItemId)
         setItemsCart([...deletedItem])
    }

    const emptyCart = () => {
      setItemsCart([])
    }

    const isInCart = (itemId) => {
        return ItemsCart.some(item => item.id === itemId)
    }

    const cartTotal = () => {
        let total = 0
        ItemsCart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
      }

      const cartQuantity = () => {
        let totalQuantity = 0
        ItemsCart.forEach(prod => {
            totalQuantity = totalQuantity + prod.quantity 
        })
        return totalQuantity
      }

    const context = {
        ItemsCart,
        addToCart,
        removeItem,
        emptyCart,
        cartTotal,
        cartQuantity
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}
export {CartProvider, useCart}