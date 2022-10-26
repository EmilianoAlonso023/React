import { createContext, useContext, useState } from "react";

const CartContext = createContext([])

const useCart = () => {
    return useContext(CartContext)
}

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (chosenItem, quantity) => {
          const cart = {
            ...chosenItem,
            quantity
          }     
          if(isInCart(cart.id)){
            cart.map(element => {
                if(element.id === cart.id)  {
                  element.quantity += cart.quantity
                }
                return(element)
            })
        
        }
        else {
          setCart([...cart, cart])   
            }
        console.log("newObject", cart);
    }
        
    const removeItem = (unchosenItemId) => {
         const deletedItem = cart.filter(item => item.id !== unchosenItemId)
         setCart([...deletedItem])
    }

    const emptyCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(item => item.id === itemId)
    }

    const cartTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total = total + prod.price * prod.quantity
        })
        return total
      }

      const cartQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity = totalQuantity + prod.quantity 
        })
        return totalQuantity
      }

    const context = {
        cart,
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

  