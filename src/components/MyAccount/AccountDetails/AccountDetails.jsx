import React from 'react'

import picture from '../../../assets/svg/accountSvg/picture.svg'

import './AccountDetails.css'

function AccountDetails() {
  return (
    <div className='accountDetails'>
      <div className="personalInfo">
        <h2>Personal Information</h2>
        <div className="personInputs">
          <div className="personInput">
            <label htmlFor="user-name">Firs Name *</label>
            <input type="text" name="user-name" id="user-name" />
          </div>
          <div className="personInput">
            <label htmlFor="last-name">Last Name *</label>
            <input type="text" name="last-name" id="last-name" />
          </div>
          <div className="personInput">
            <label htmlFor="email">Email address *</label>
            <input type="email" name="email" id="email" autoComplete='email' />
          </div>
          <div className="personInput">
            <label htmlFor="number-phone">Phone Number *</label>
            <div className="number">
              <select name="number" id="number">
                <option value="rus">+8</option>
                <option value="kgs">+996</option>
                <option value="kgz">+123</option>
              </select>
            </div>
            <input type="number" name="number-phone" id="number-phone" />
          </div>
          <div className="personInput">
            <label htmlFor="user-name">Username *</label>
            <input type="text" name="user-name" />
          </div>
          <div className="personInput">
            <p>Photo</p>
            <div className="avatarChange">
              <div className="imgChange">
                <img src={picture} alt="avatar" />
              </div>
              <div className="changeImgBtn">
                <button className='change'>Change</button>
                <button className='remove'>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="passwordChanged">
        <h2>Password Changed</h2>
        <div className="passwordInputs">
          <div className="passwordInput">
            <label htmlFor="password">Current password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="passwordInput">
            <label htmlFor="new-password">New password</label>
            <input type="password" name="new-password" id="new-password" />
          </div>
          <div className="passwordInput">
            <label htmlFor="try-new-password">Confirm new password</label>
            <input type="password" name="try-new-password" id="try-new-password" />
          </div>
          <div className="saveBtn">
            <button>Save Change</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountDetails