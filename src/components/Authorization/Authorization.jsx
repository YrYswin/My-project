import React, { useState } from 'react'

import SignUp from './SignUp'
import Register from './Register.jsx'

import exite from '../../assets/svg/X.svg'
import google from '../../assets/svg/google.svg'
import facebook from '../../assets/svg/facebook.svg'

import './Authorization.css'

function Authorization({ closePopup }) {
  const [active, setActive] = useState(true)

  function changeMenu(messange) {
    setActive(messange)
  }
  return (
    <div className='popup'>
      <div className="registerMenu">
        <button className='closePopup' onClick={closePopup}>
          <img src={exite} alt="exite" />
        </button>
        <div className="titlePopup">
          <button className={!active ? 'active' : ''} onClick={() => changeMenu(false)}>Sign Up</button>
          <div className='borders'></div>
          <button className={active ? 'active' : ''} onClick={() => changeMenu(true)}>Register</button>
        </div>

        {
          active ? <Register closePopup={closePopup} /> : <SignUp closePopup={closePopup} />
        }

        <div className="registerWith">
          <button>
            <img src={google} alt="google" />
            <p>Continue with Google</p>
          </button>
          <button>
            <img src={facebook} alt="facebook" />
            <p>Continue with Facebook</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Authorization;