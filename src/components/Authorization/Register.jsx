import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

import { fetchRegister, selectIsAuth } from '../../redux/slices/auth';

function Register({ closePopup }) {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  useEffect(() => {
    if (isAuth) {
      closePopup();
    }
  }, [isAuth, closePopup])

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert('Не удалось Зарегестрироваться');
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
    }
    closePopup();
  }

  if (isAuth) {
    return <Navigate to='/' />;
  }

  return (
    <div className='register'>
      <h3>Enter your email and password to register.</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="inputs">
        <input
          type="text"
          placeholder='Username'
          autoComplete='off'
          {...register('fullName', { required: "Укажите полное имя" })}
        />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
        <input
          type="email"
          placeholder='Enter your email address'
          autoComplete='off'
          {...register('email', { required: "Укажите почту" })}
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
        <input
          type="password"
          placeholder='Password'
          {...register('password', { required: "Укажите пароль" })}
        />
        {errors.password && <p className="error">{errors.password.message}</p>}
        <button
          type='submit'
          disabled={!isValid}
          className='authorizationBtn'
        >Register</button>
      </form>

      <p className="or">Or register with</p>
    </div>
  )
}

export default Register