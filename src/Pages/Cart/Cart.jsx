import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'
import './Cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

  const{cartItems,getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()

  return (
  <div className='cart'>
    <div>
      <h1>Your Cart items</h1>
    </div>
    <div className='cartItems'>
      {PRODUCTS.map((product)=>{
        if (cartItems[product.id] !== 0){
          return <CartItem data={product} />
        }
      })}
    </div>
    {totalAmount > 0 ? (
    <div className='checkout'>
      <p>Subtotal: ${totalAmount}</p>
      <button onClick={()=> navigate("/")}> Continue Shopping </button>
      <button> Checkout </button>
    </div>
  ) : (
  <h3>Your cart is empty</h3>
  )}
  </div>
  ) 
}


