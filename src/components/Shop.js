import "../style/reset.css";
import "../style/style.css";

import nikeAF1Black from "../img/shop/00_nike_af1_black.webp";
import nikeAF1White from "../img/shop/01_nike_af1_white.webp";
import converseOneStar from "../img/shop/02_converse_onestar_orange.webp";
import asicsEx89 from "../img/shop/03_asics_ex89_grey.webp";
import nb650r from "../img/shop/04_nb_650r_red.webp";
import vansSk8White from "../img/shop/05_vans_sk8_white.webp";

import { useEffect } from "react";

const Shop = ({ cart, setCart }) => {
  const shopItems = [
    ["Nike", "Slam Jam Air Force 1 Low SP Sneakers Black", 170.0, nikeAF1Black],
    ["Nike", "Slam Jam Air Force 1 Low SP Sneakers White", 170.0, nikeAF1White],
    ["Converse", "One Star Pro Sneakers Orange", 75.0, converseOneStar],
    ["Asics", "EX89 Sneakers White / Clay Grey", 115.0, asicsEx89],
    ["New Balance", "650R Sneakers Black / Red", 150.0, nb650r],
    ["Vans", "SK8-Mid LX OG Sneakers White", 85.0, vansSk8White],
  ];

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
        <div className="shop-intro">
          Sneaker Underground collection spans from the most classic white
          sneakers to the newest experimentation. Never run out of inspiration.
        </div>
        <div className="shop-grid"></div>
      </div>
    </div>
  );
};

export default Shop;
