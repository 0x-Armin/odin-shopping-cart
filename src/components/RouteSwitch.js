import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const RouteSwitch = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Nav cart={cart} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;