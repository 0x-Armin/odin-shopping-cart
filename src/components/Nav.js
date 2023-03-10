import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h3 className="logo"><Link to='/'>SNEAKERS UNDERGROUND</Link></h3>
      <ul className="navigation-links">
        <Link to="/odin-shopping-cart/">
          <li>Home</li>
        </Link>
        <Link to="/odin-shopping-cart/shop">
          <li>Shop</li>
        </Link>
        <Link to="/odin-shopping-cart/cart">
          <li>Cart ({numCartItems})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
