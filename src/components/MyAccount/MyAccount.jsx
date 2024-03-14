import React, { useState } from 'react'
import { logout } from '../../redux/slices/auth'
import { useDispatch } from 'react-redux'


import Address from './Address/Address'
import AccountDetails from './AccountDetails/AccountDetails'
import Orders from './Orders/Orders'
import Wishlist from './Wishlist/Wishlist'
import Reports from './Reports/Reports'
import Downloads from './Downloads/Downloads'
import Support from './Support/Support'

import account from '../../assets/svg/accountSvg/account.svg'
import address from '../../assets/svg/accountSvg/Location.svg'
import download from '../../assets/svg/accountSvg/Download.svg'
import logoutIcon from '../../assets/svg/accountSvg/Logout.svg'
import orders from '../../assets/svg/accountSvg/Order.svg'
import reports from '../../assets/svg/accountSvg/Reports.svg'
import support from '../../assets/svg/accountSvg/Support.svg'
import wishlist from '../../assets/svg/accountSvg/Wishlist.svg'

import './MyAccount.css'

function MyAccount() {
  const dispatch = useDispatch()
  const [active, setActive] = useState('AccountDetails')

  function onClickLogout() {
    if (window.confirm('Вы действительно хотите выйти?'))
      dispatch(logout())
    window.localStorage.removeItem('token')
  }

  const handleMenuItemClick = (page) => {
    setActive(page);
  };

  return (
    <div className='myAccount'>
      <div className="accountMenu">
        <h1>My Account</h1>
        <ul>
          <li
            onClick={() => handleMenuItemClick('AccountDetails')}
            className={active === 'AccountDetails' ? 'activeClass' : ''}
          >
            <img src={account} alt="#" />
            <p>Account Details</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Address')}
            className={active === 'Address' ? 'activeClass' : ''}
          >
            <img src={address} alt="#" />
            <p>Address</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Orders')}
            className={active === 'Orders' ? 'activeClass' : ''}
          >
            <img src={orders} alt="#" />
            <p>Orders</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Wishlist')}
            className={active === 'Wishlist' ? 'activeClass' : ''}
          >
            <img src={wishlist} alt="#" />
            <p>Wishlist</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Reports')}
            className={active === 'Reports' ? 'activeClass' : ''}
          >
            <img src={reports} alt="#" />
            <p>Reports</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Downloads')}
            className={active === 'Downloads' ? 'activeClass' : ''}
          >
            <img src={download} alt="#" />
            <p>Downloads</p>
          </li>

          <li
            onClick={() => handleMenuItemClick('Support')}
            className={active === 'Support' ? 'activeClass' : ''}
          >
            <img src={support} alt="#" />
            <p>Support</p>
          </li>


          <li
            className='logout'
            onClick={() => onClickLogout()}
          >
            <img src={logoutIcon} alt="logout" />
            <p>Logout</p>
          </li>
        </ul>
      </div>
      <div className="activePage">
        {active === 'AccountDetails' && <AccountDetails />}
        {active === 'Address' && <Address />}
        {active === 'Orders' && <Orders />}
        {active === 'Wishlist' && <Wishlist />}
        {active === 'Reports' && <Reports />}
        {active === 'Downloads' && <Downloads />}
        {active === 'Support' && <Support />}
      </div>
    </div>
  )
}

export default MyAccount