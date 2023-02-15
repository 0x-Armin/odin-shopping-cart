import React from "react";
import { Link } from "react-router-dom";

import "../style/reset.css";
import "../style/style.css";

const Nav = ({cart}) => {
  const countCartItems = (cart) => {
    let numItems = 0;
    for (let i=0; i<cart.length; i++) {
      numItems += cart[i][2];
    }

    return numItems;
  }

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
          <li>Cart ({countCartItems(cart)})</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
