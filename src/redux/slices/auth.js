import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('/auth/fetchAuth', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);
  return data;
})

export const fetchAuthMe = createAsyncThunk('/auth/fetchAuthMe', async (params) => {
  const { data } = await axios.get('/auth/me', params);
  return data;
})

const initialState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      state.status = 'loaded';
    },
  },

  //  Отслеживаем состояние загрузки и Сохраняем данные в REDUX
  extraReducers: (builder) => {
    // Загрузка при Входе в аккаунт  LOGIN
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      // Зарузка при Регистраций REGISTER
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })

      // Загрузка при Получений Данных Пользователья
      .addCase(fetchAuthMe.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuthMe.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuthMe.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuth = state => Boolean(state.auth.data);
export const authReducer = authSlice.reducer;