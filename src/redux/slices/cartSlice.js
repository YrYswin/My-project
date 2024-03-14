import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: []
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload._id
      const findProduct = state.carts.find((x) => x._id === id)
      if (findProduct) {
        findProduct.quantity++
      } else {
        state.carts.push({ ...action.payload, quantity: 1 })
      }
    },
    deleteCart: (state, action) => {
      const id = action.payload._id
      state.carts = state.carts.filter((x) => x._id !== id)
    }
  },
})

export const { addToCart, deleteCart } = cartSlice.actions
export default cartSlice.reducer