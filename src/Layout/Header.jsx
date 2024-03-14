import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../redux/slices/auth';

import Authorization from '../components/Authorization/Authorization';

import avatar from '../assets/svg/defaultAvatar.svg';
import card from '../assets/svg/card.svg';
import logo from '../assets/image/logo.png';
import login from '../assets/svg/accountSvg/Login.svg';
import search from '../assets/svg/Vector.svg';

import HD from './HeaderFooter.module.css';

function Header() {
  const [popup, setPopup] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const { data } = useSelector(state => state.auth);

  function openPopup() {
    setPopup(true)
  }
  function closePopup() {
    setPopup(false)
  }

  return (
    <>
      <div className={HD.header}>
        <div className={HD.logo}>
          <img src={logo} alt="logo" />
          <div className={HD.title}>
            <h1>Green Days</h1>
            <p>My life, my rules</p>
          </div>
        </div>

        <div className={HD.pages}>
          <div className={HD.page}><Link to='/'>Home</Link></div>
          <div className={HD.page}><Link to='/shop/140'>Shop</Link></div>
          <div className={HD.page}><Link to='/plantcare'>PlantCare</Link></div>
          <div className={HD.page}><Link to='/blog'>Blogs</Link></div>
        </div>

        <div className={HD.account}>
          <Link>
            <img src={search} alt="#" />
          </Link>
          <Link to={isAuth ? './shop/cart-product' : ''} onClick={isAuth ? '' : openPopup}>
            <img src={card} alt="#" />
          </Link>
          {
            isAuth ?
              <Link to='/account'>
                <button className={HD.userButton}>
                  <h1>{data.fullName}</h1>
                  <img src={avatar} alt="" />
                </button>
              </Link>
              :
              <button onClick={openPopup}>
                <img src={login} alt="title" />
                <div>Login</div>
              </button>
          }
        </div>
      </div>

      {
        popup && <Authorization closePopup={closePopup} />
      }
    </>
  )
}

export default Header