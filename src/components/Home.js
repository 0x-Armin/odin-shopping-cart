import "../style/reset.css";
import "../style/style.css";

import newBalanceImg from "../img/newbalance-bb550.webp";
import reebokImg from "../img/reebok-classic.webp";
import mizunoImg from "../img/mizuno-waverider10.webp";

const Home = () => {
  return (
    <div>
      <div className="sneakers-row">
        <img className="sneaker-home" src={newBalanceImg} alt="New Balance BB550 Sneaker"></img>
        <img className="sneaker-home" src={reebokImg} alt="Reebok Classic Sneaker"></img>
        <img className="sneaker-home" src={mizunoImg} alt="Mizuno Waverider 10 Sneaker"></img>
      </div>
    </div>
  );
};

export default Home;
