import "../style/reset.css";
import "../style/style.css";

import { useEffect } from "react";
import ShopItems from "./ShopItems";

const Shop = ({ cart, setCart }) => {
  const handleAddToCart = (e) => {
    const idx = e.target.id.substring(4);
    let input = document.getElementById(`input-${idx}`).value;

    if (input !== "") {
      const updatedCart = new Map(
        JSON.parse(JSON.stringify(Array.from(cart)))
      );
      input = parseInt(input);
      if (cart.has(idx)) {
        const newItemVol = cart.get(idx) + input;
        updatedCart.set(idx, newItemVol);
      } else {
        updatedCart.set(idx, input);
      }

      setCart(updatedCart);
    }
  };

  const populateItemsToGrid = () => {
    const grid = document.querySelector(".shop-grid");
    const shopItems = ShopItems.getShopItems();

    for (let i = 0; i < shopItems.length; i++) {
      const item = shopItems[i];

      const itemCell = document.createElement("div");
      itemCell.classList.add("item-cell");

      const itemImg = document.createElement("img");
      itemImg.src = item[3];
      itemImg.classList.add("item-img");

      const itemBrand = document.createElement("div");
      itemBrand.innerText = item[0];
      itemBrand.classList.add("item-brand");

      const itemName = document.createElement("div");
      itemName.innerText = item[1];
      itemName.classList.add("item-name");

      const itemPrice = document.createElement("div");
      itemPrice.innerText = `$${item[2].toFixed(2)} USD`;
      itemPrice.classList.add("item-price");

      const addToCartDiv = document.createElement("div");
      addToCartDiv.classList.add("add-to-cart-div");
      const addToCartInput = document.createElement("input");
      addToCartInput.classList.add("add-to-cart-input");
      addToCartInput.id = `input-${i}`;
      addToCartInput.type = "number";
      addToCartInput.min = "0";
      addToCartInput.max = "10";
      const addToCartBtn = document.createElement("button");
      addToCartBtn.classList.add("add-to-cart-btn");
      addToCartBtn.id = `btn-${i}`;
      addToCartBtn.innerText = "Add to cart";
      addToCartBtn.addEventListener("click", handleAddToCart);

      addToCartDiv.appendChild(addToCartInput);
      addToCartDiv.appendChild(addToCartBtn);

      itemCell.appendChild(itemImg);
      itemCell.appendChild(itemBrand);
      itemCell.appendChild(itemName);
      itemCell.appendChild(itemPrice);
      itemCell.appendChild(addToCartDiv);

      grid.appendChild(itemCell);
    }
  };

  const removeItemsFromGrid = () => {
    const grid = document.querySelector(".shop-grid");
    grid.innerHTML = '';
  }

  useEffect(() => {
    removeItemsFromGrid();
    populateItemsToGrid();

    return () => {
      const btnArr = document.querySelectorAll('.add-to-cart-btn');
      btnArr.forEach(btn => btn.removeEventListener('click', handleAddToCart));
    }
  });

  return (
    <div className="shop-page">
      <div className="shop-sidebar"></div>
      <div className="shop-main">
        <div className="intro">
          Sneaker Underground collection spans from the most classic white
          sneakers to the newest experimentation. Never run out of inspiration.
        </div>
        <div className="shop-grid"></div>
      </div>
    </div>
  );
};

export default Shop;
