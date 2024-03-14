import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { fetchAuth, selectIsAuth } from '../../redux/slices/auth'

function SignUp({ closePopup }) {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  })

  useEffect(() => {
    if (isAuth) {
      closePopup();
    }
  }, [isAuth, closePopup])

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      return alert('Не удалось авторизоваться')
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    } else {
      alert('Не удалось авторизоваться')
    }
  }

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <div className='signUp'>
      <h3>Enter your username and password to login.</h3>

      <form onSubmit={handleSubmit(onSubmit)} className="inputs">
        <input
          type="email"
          placeholder='Enter your email address'
          autoComplete='off'
          {...register('email', { required: "Укажите почту" })}
        />

        <input
          type="password"
          placeholder='Password'
          {...register('password', { required: "Укажите пароль" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}

        <span>Forgot Password?</span>

        <button disabled={!isValid} className='authorizationBtn' type='submit'>Login</button>
      </form>


      <p className="or" >Or login with</p>
    </div>
  )
}

export default SignUp