import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const RouteSwitch = () => {
  const [cart, setCart] = useState(new Map());

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path='/odin-shopping-cart/' element={<Home />} />
        <Route path='/odin-shopping-cart/shop' element={<Shop cart={cart} setCart={setCart} /> } />
        <Route path='/odin-shopping-cart/cart' element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;