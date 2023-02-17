import { useEffect, useState } from "react";
import "../style/reset.css";
import "../style/style.css";

import ShopItems from "./ShopItems";

const Cart = ({ cart }) => {
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    const clearCartGrid = () => {
      const grid = document.querySelector(".cart-grid");
      const cartRows = document.querySelectorAll(".cart-row");
      for (let i = 1; i < cartRows.length; i++) {
        grid.removeChild(cartRows[i]);
      }
    };

    const populateCartToGrid = (cart) => {
      const shopItems = ShopItems.getShopItems();
      const cartArr = Array.from(cart).sort(function (a, b) {
        return parseInt(a[0]) - parseInt(b[0]);
      });
      const grid = document.querySelector(".cart-grid");

      let total = 0;
      cartArr.forEach((cartEntry) => {
        const idx = parseInt(cartEntry[0]);
        const count = cartEntry[1];
        const item = shopItems[idx];

        const cartRow = document.createElement("div");
        cartRow.classList.add("cart-row");

        const cartImg = document.createElement("img");
        cartImg.classList.add("cart-row-img");
        cartImg.src = item[3];

        const cartItemSect = document.createElement("div");
        cartItemSect.classList.add("cart-row-sect");

        const cartItemBrand = document.createElement("div");
        cartItemBrand.classList.add("cart-row-brand");
        cartItemBrand.innerText = item[0];

        const cartItemName = document.createElement("div");
        cartItemName.classList.add("cart-row-name");
        cartItemName.innerText = item[1];

        cartItemSect.appendChild(cartItemBrand);
        cartItemSect.appendChild(cartItemName);

        const cartItemPrice = document.createElement("div");
        cartItemPrice.classList.add("cart-row-number");
        cartItemPrice.innerText = `$${item[2].toFixed(2)} USD`;

        const cartItemQuantity = document.createElement("div");
        cartItemQuantity.classList.add("cart-row-number");
        cartItemQuantity.innerText = count;

        const cartItemSubtotal = document.createElement("div");
        cartItemSubtotal.classList.add("cart-row-number");
        const subtotal = item[2] * count;
        total += subtotal;
        cartItemSubtotal.innerText = `$${subtotal.toFixed(2)} USD`;

        cartRow.appendChild(cartImg);
        cartRow.appendChild(cartItemSect);
        cartRow.appendChild(cartItemPrice);
        cartRow.appendChild(cartItemQuantity);
        cartRow.appendChild(cartItemSubtotal);

        grid.appendChild(cartRow);
      });

      setTotalAmt(total);
    };

    const addSumTotalRowToGrid = () => {
      const grid = document.querySelector(".cart-grid");
      const cartRow = document.createElement("div");
      cartRow.classList.add("cart-row");

      for (let i = 0; i < 3; i++)
        cartRow.appendChild(document.createElement("div"));

      const totalWordDiv = document.createElement("div");
      totalWordDiv.innerText = "Total";

      const totalAmtDiv = document.createElement("div");
      totalAmtDiv.innerText = `$${totalAmt.toFixed(2)} USD`;

      cartRow.appendChild(totalWordDiv);
      cartRow.appendChild(totalAmtDiv);

      grid.appendChild(cartRow);
    };

    clearCartGrid();
    populateCartToGrid(cart);
    addSumTotalRowToGrid();
  }, [cart, totalAmt]);

  return (
    <div className="cart-page">
      <div className="cart-header">Your shopping cart</div>
      <div className="intro">
        Now that you have checked these sneakers out, it's time to check out. 🛒
      </div>
      <div className="cart-grid">
        <div className="cart-row">
          <div>Item</div>
          <div>Brand/name</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Sub-total</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
