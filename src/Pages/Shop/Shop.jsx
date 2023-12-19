import React from 'react'
import { Products } from '../../Products'
import { Product } from './Product'

export const Shop = () => {
  return (
  <div className='shop'>
    <div className='shopTitle'>
      <h1>Sampy Online Store</h1>
    </div>
    <div className='products'>
      {Products.map((product) => (
        <Product data={Products}/>
      ))}
    </div>
  </div>
  ) 
}


