import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { fetchAuthMe } from './redux/slices/auth'

import Layout from './Layout/Layout'
import MyAccount from './components/MyAccount/MyAccount';
import CartProduct from './components/CartProduct/CartProduct';
import Blogs from './pages/Blogs';
import Home from './pages/Home';
import PlantCare from './pages/PlantCare';
import Shop from './pages/Shop';

import './App.css';
import Checkout from './components/Checkout/Checkout';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  })

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blogs />} />
          <Route path='/plantCare' element={<PlantCare />} />
          <Route path='/shop/:id' element={<Shop />} />
          <Route path='/shop/cart-product' element={<CartProduct />} />
          <Route path='/shop/checkout' element={<Checkout />} />
          <Route path='/account' element={<MyAccount />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
