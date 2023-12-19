import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products'
import { ShopContext } from '../../Context/ShopContext'
import { CartItem } from './CartItem'


export const Cart = () => {

  const{addToCart,cartItems} = useContext(ShopContext)

  return (
  <div className='cart'>
    <div>
      <h1>Your Cart items</h1>
    </div>
    <div className='cartItems'>
      {PRODUCTS.map((Product)=>{
        if(cartItems[Product.id] !== 0){
          return <CartItem data={Product} />
        }
      })}
    </div>
  </div>
  ) 
}


