import React from 'react'

import './ReletedProducts.css'
import plant from '../../assets/image/plant.png'

function ReletedProducts() {
   return (
      <div className='reletedProducts'>
         <div className="titleReleted">
            <h2>Releted Products</h2>
         </div>

         <div className="products">
            <div className="product">
               <img src={plant} alt="plant" />
               <div className="titleProductReleted">
                  <h3>Flower</h3>
                  <span>$100</span>
               </div>
            </div>

            <div className="product">
               <img src={plant} alt="plant" />
               <div className="titleProductReleted">
                  <h3>Flower</h3>
                  <span>$100</span>
               </div>
            </div>

            <div className="product">
               <img src={plant} alt="plant" />
               <div className="titleProductReleted">
                  <h3>Flower</h3>
                  <span>$100</span>
               </div>
            </div>

            <div className="product">
               <img src={plant} alt="plant" />
               <div className="titleProductReleted">
                  <h3>Flower</h3>
                  <span>$100</span>
               </div>
            </div>

            <div className="product">
               <img src={plant} alt="plant" />
               <div className="titleProductReleted">
                  <h3>Flower</h3>
                  <span>$100</span>
               </div>
            </div>
         </div>

         <div className="pages">
            <p>0  0  0</p>
         </div>
      </div>
   )
}

export default ReletedProducts