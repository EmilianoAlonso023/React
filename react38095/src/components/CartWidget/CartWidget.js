import React from 'react'
import {Link} from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const CartWidget = () => {
  const{cartQuantity} = useCart()
  return (
   
<Link className="nav-link active" aria-current="page" to='/cart'>
Carrito
<span className=''>{cartQuantity() || ''}</span>
  </Link>

  )
}
export default CartWidget