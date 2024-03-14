import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import ProductItem from './ProductItem'

import './Products.css'

function Prducts() {
  const { carts } = useSelector((state) => state.cart)

  let totalPrice = 0;

  carts.forEach((item) => {
    const price = item.price;
    const quantity = item.quantity;

    totalPrice += price * quantity;
  });

  let discount = 1.25;
  let shipping = 19;
  let total = totalPrice / discount + shipping;

  return (
    <div className='products'>
      <div className="productsCart">
        <div className="cartTitle">
          <li>Products</li>
          <li>Price</li>
          <li>Quantity</li>
          <li>Total</li>
        </div>
        <div className="itemsCart">

          {
            carts.map((item) => (
              <ProductItem key={item._id} data={item} />
            ))
          }

        </div>
      </div>

      <div className="ProductsCounter">
        <div className="titleCounter">
          <h4>Carts Total</h4>
        </div>
        {
          carts.forEach((item) => (
            <div key={item._id}>{item.price * item.quantity}</div>
          ))
        }
        <div className="couponItem">
          <p>Coupon Apply</p>
          <div className="couponInput">
            <input type="text" placeholder='Enter coupon code here' />
            <button>Apply</button>
          </div>
        </div>
        <div className="totalCounter">
          <div><p>Subtotal</p><span>${totalPrice}</span></div>
          <div><p>Coupon Discount</p><span>20%</span></div>
          <div><p>Shiping</p><span>${shipping}</span></div>
          <p>View shiping charge</p>
          <div><p>Total</p><span>${total}</span></div>
        </div>
        <div className="checkout">
          <button className='proceed'><Link to='/shop/checkout'>Proceed To Checkout</Link></button>
          <button className='shopping'>Continue Shopping</button>
        </div>
      </div>
    </div>
  )
}

export default Prducts