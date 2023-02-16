import React, { createFactory, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import "../style/reset.css";
import "../style/style.css";

const Nav = ({cart}) => {
  const [numCartItems, setNumCartItems] = useState(0);

  const countCartItems = (cart) => {
    let sum = 0;
    cart.forEach((v) => sum += v);

    return sum;
  }

  useEffect(() => {
    setNumCartItems(countCartItems(cart));
  }, [cart]);

  return (
    <nav className="navigation-bar">
      <h3 className="logo">SNEAKERS UNDERGROUND</h3>
      <ul className="navigation-links">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/cart">
          <li>Cart ({numCartItems})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
