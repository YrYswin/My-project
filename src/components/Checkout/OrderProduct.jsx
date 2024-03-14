import React from 'react'

import plant from '../../assets/image/plant.png'

import './OrderProduct.css'

function OrderProduct() {
   return (
      <div className='orderProduct'>
         <div className="image">
            <img src={plant} alt="plant" />
            <div>
               <h5>Plant</h5>
               <p>SKU: 1243153253</p>
            </div>
         </div>
         <div className="quantity">
            <p>(x 4)</p>
         </div>
         <div className="price">
            <p>$100</p>
         </div>
      </div>
   )
}

export default OrderProduct