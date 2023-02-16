import React, { useState, useEffect } from 'react';
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
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop cart={cart} setCart={setCart} /> } />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;