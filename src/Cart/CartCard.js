// Cart.js
import React from 'react'

const Cart= ({item}) => {
  return (
    <div>
    <h4>Title-{item.title}</h4>
    <img src ={item.image}></img>
    </div>
  )
  }
  

export default Cart;
