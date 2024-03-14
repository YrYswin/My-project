import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchProducts = createAsyncThunk('/plants/fetchProducts', async () => {
  const { data } = await axios.get('/plants');
  return data;
});

const initialState = {
  products: {
    items: [],
    status: 'loading',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  // extraReducers: {
  //   // Получение статей
  //   [fetchProducts.pending]: (state) => {
  //     state.products.status = 'loading'
  //   },
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     state.products.items = action.payload;
  //     state.products.status = 'loaded';
  //   },
  //   [fetchProducts.rejected]: (state) => {
  //     state.products.items = [];
  //     state.products.status = 'error';
  //   },
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.products.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.status = 'loaded';
        state.products.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products.status = 'error';
        state.products.items = [];
      })
  }
})

export const productsReducer = productsSlice.reducer;