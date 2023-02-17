import nikeAF1Black from "../img/shop/00_nike_af1_black.webp";
import nikeAF1White from "../img/shop/01_nike_af1_white.webp";
import converseOneStar from "../img/shop/02_converse_onestar_orange.webp";
import asicsEx89 from "../img/shop/03_asics_ex89_grey.webp";
import nb650r from "../img/shop/04_nb_650r_red.webp";
import vansSk8White from "../img/shop/05_vans_sk8_white.webp";

const ShopItems = (() => {
  const shopItems = [
    ["Nike", "Slam Jam Air Force 1 Low SP Sneakers Black", 170.0, nikeAF1Black],
    ["Nike", "Slam Jam Air Force 1 Low SP Sneakers White", 170.0, nikeAF1White],
    ["Converse", "One Star Pro Sneakers Orange", 75.0, converseOneStar],
    ["Asics", "EX89 Sneakers White / Clay Grey", 115.0, asicsEx89],
    ["New Balance", "650R Sneakers Black / Red", 150.0, nb650r],
    ["Vans", "SK8-Mid LX OG Sneakers White", 85.0, vansSk8White],
  ];

  const getShopItems = () => {
    return shopItems;
  }

  return {
    getShopItems,
  }
})();

export default ShopItems;