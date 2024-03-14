import React from 'react'

import OrderProduct from './OrderProduct'

import exite from '../../assets/svg/X.svg'
import orderImage from '../../assets/svg/orderImage.svg'

function OrderMenu({ changeActive }) {
   return (
      <div className='orderModal'>
         <div className="orderMenu">
            <div className="orderTitle">
               <img src={orderImage} alt="order" />
               <button className='closeOrderMenu' onClick={changeActive}>
                  <img src={exite} alt="exite" />
               </button>
               <p>Your order has been recieved</p>
            </div>

            <div className="orderInfo">
               <div className="information">
                  <h5>Order Number</h5>
                  <p>24364252464</p>
               </div>
               <div className="information">
                  <h5>Date</h5>
                  <p>15 avg, 2030</p>
               </div>
               <div className="information">
                  <h5>Total</h5>
                  <p>$549</p>
               </div>
               <div className="information">
                  <h5>Payment Method</h5>
                  <p>Cash on delivery</p>
               </div>
            </div>

            <div className="orderDetail">
               <h1>Order Detail</h1>
               <div className="naming">
                  <h5>Products</h5>
                  <h5>Qty</h5>
                  <h5>Subtotal</h5>
               </div>

               <div className="orderList">
                  <OrderProduct />
                  <OrderProduct />
                  <OrderProduct />
               </div>

               <div className="orderTotal">
                  <div>
                     <div><p>Shipping</p><p className='boldWeight'>$16.00</p></div>
                     <div><p className='boldWeight'>Total</p><p className='greenColor'>$549.00</p></div>
                  </div>
               </div>
            </div>
            <div className="orderTrack">
               <div>
                  <p>
                     Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date for your items.
                  </p>
               </div>
               <button>Track Your Order</button>
            </div>
         </div>
      </div>
   )
}

export default OrderMenu