import { configureStore } from '@reduxjs/toolkit'

// import {postsReducer} from 
import { authReducer } from './slices/auth'
import { productsReducer } from './slices/products'
import cartSlice from './slices/cartSlice'


const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartSlice,
  }
})

export default store