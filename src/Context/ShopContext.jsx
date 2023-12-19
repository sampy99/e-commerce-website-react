import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

const getDefaultCart = ()=> {
  let cart ={}
  for(let i=1;i<products.length; i++){
    cart[i]=0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {

  const[cartItems,setCartItems] =useState(getDefaultCart())

  const addToCart (itemId) => {
       setCartItems((pre) => ({...pre,[itemId]:pre[itemId] + 1}))
  }

  const removeFromCart (itemId) => {
    setCartItems((pre) => ({...pre,[itemId]:pre[itemId] - 1}))
}

  const contextValue = {cartItems, addToCart, removeFromCart}

  return <ShopContext.Provider>{props.children}</ShopContext.Provider>
    
}
