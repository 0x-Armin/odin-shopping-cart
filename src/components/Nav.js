import React from "react";
import { Link } from "react-router-dom";

import "../style/reset.css";
import "../style/style.css";

const Nav = () => {
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
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
