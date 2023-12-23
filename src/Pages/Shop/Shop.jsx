import React from 'react'
import { PRODUCTS } from '../../Products'
import { Product } from './Product'
import './Shop.css'

export const Shop = () => {
  return (
  <div className='shop'>
    <div className='shopTitle'>
      <h2>Apple Online Store</h2>
    </div>
    <div className='products'>
      {PRODUCTS.map((producti) => (
        <Product data={producti}/>
      ))}
    </div>
  </div>
  ) 
}



