import "../style/reset.css";
import "../style/style.css";

import nikeAF1Black from "../img/shop/00_nike_af1_black.webp";
import nikeAF1White from "../img/shop/01_nike_af1_white.webp";
import converseOneStar from "../img/shop/02_converse_onestar_orange.webp";
import asicsEx89 from "../img/shop/03_asics_ex89_grey.webp";
import nb650r from "../img/shop/04_nb_650r_red.webp";
import vansSk8White from "../img/shop/05_vans_sk8_white.webp";
import { useEffect } from "react";

const Shop = ( {cart, setCart} ) => {
  const shopItems = [
    ['Nike', 'Slam Jam Air Force 1 Low SP Sneakers Black', 170.00, nikeAF1Black],
    ['Nike', 'Slam Jam Air Force 1 Low SP Sneakers White', 170.00, nikeAF1White],
    ['Converse', 'One Star Pro Sneakers Orange', 75.00, converseOneStar],
    ['Asics', 'EX89 Sneakers White / Clay Grey', 115.00, asicsEx89],
    ['New Balance', '650R Sneakers Black / Red', 150.00, nb650r],
    ['Vans', 'SK8-Mid LX OG Sneakers White', 85.00, vansSk8White],
  ]

  const populateItemsToGrid = () => {
    const grid = document.querySelector('.shop-grid');
    
    for (let item of shopItems) {
      const itemCell = document.createElement('div');
      itemCell.classList.add('item-cell');

      const itemImg = document.createElement('img');
      itemImg.src = item[3];
      itemImg.classList.add('item-img');

      const itemBrand = document.createElement('div');
      itemBrand.innerText = item[0];
      itemBrand.classList.add('item-brand');

      const itemName = document.createElement('div');
      itemName.innerText = item[1];
      itemName.classList.add('item-name');

      const itemPrice = document.createElement('div');
      itemPrice.innerText = `\S${item[2]} USD`;
      itemPrice.classList.add('item-price');

      itemCell.appendChild(itemImg);
      itemCell.appendChild(itemBrand);
      itemCell.appendChild(itemName);
      itemCell.appendChild(itemPrice);

      grid.appendChild(itemCell);
    }
  }

  useEffect(() => {
    populateItemsToGrid();
  }, []);

  return (
    <div className="shop-page">
      <div className="shop-sidebar"></div>
      <div className="shop-main">
        <div className="shop-intro">Sneaker Underground collection spans from the most classic white sneakers to the newest experimentation. Never run out of inspiration.</div>
        <div className="shop-grid"></div>
      </div>
    </div>
  );
};

export default Shop;
