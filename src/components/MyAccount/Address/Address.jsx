import React from 'react'

import './Address.css'

function Address() {
   return (
      <div className='address'>
         <div className="titleAddress">
            <div className="nameAddress">
               <h2>Billing Address</h2>
               <p>The following addresses will be used on the checkout page by default.</p>
            </div>
            <div className="addressBtn">
               <button>Add</button>
            </div>
         </div>
         <div className="personInputs">

            <div className="personInput">
               <label htmlFor="first-name">First Name *</label>
               <input type="text" name="first-name" id="first-name" placeholder='' autoComplete='first-name' />
            </div>
            <div className="personInput">
               <label htmlFor="last-name">Last Name *</label>
               <input type="text" name="last-name" id="last-name" placeholder='' />
            </div>
            <div className="personInput">
               <label htmlFor="country">Country / Region *</label>
               <input type="text" name="country" id="country" placeholder='' autoComplete='country' />
            </div>
            <div className="personInput">
               <label htmlFor="city">Town / City *</label>
               <input type="text" name="city" id="city" placeholder='' />
            </div>
            <div className="personInput">
               <label htmlFor="street">Street Address *</label>
               <input type="text" name="street" id="street" placeholder='' />
            </div>
            <div className="personInput">
               <label htmlFor="state">State *</label>
               <input type="text" name="state" id="state" placeholder='' />
            </div>
            <div className="personInput">
               <label htmlFor="zip">Zip *</label>
               <input type="text" name="zip" id="zip" placeholder='' />
            </div>
            <div className="personInput">
               <label htmlFor="email">Email address *</label>
               <input type="text" name="email" id="email" placeholder='' autoComplete='email' />
            </div>

            <div className="personInput">
               <label htmlFor="number-phone">Phone Number *</label>
               <div className="number">
                  <select name="number" id="number">
                     <option value="rus">+8</option>
                     <option value="kgs">+996</option>
                     <option value="kgz">+123</option>
                  </select>
                  <input type="text" name="number-phone" id="number-phone" />
               </div>
            </div>
            <div className="saveAddress">
               <button>Save Address</button>
            </div>
         </div>
         <div className="shipping">
            <div className="shipTitle">
               <h4>Shipping Address</h4>
               <p>You have not set up this type of address yet.</p>
            </div>
            <div className="shipAdd">
               <input type="checkbox" name="check" id="check" />
               <p>Same as billing address</p>
               <button>Add</button>
            </div>
         </div>
      </div>
   )
}

export default Address