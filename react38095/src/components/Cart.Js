import React, { useContext } from 'react'

const Cart = () => {
    const {ItemsCart} = useContext (CartContext)

  return (
    <div>Cart</div>
  )
}
export default Cart