/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";
import Burger from "./Burger";

function BannerSign() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Connexion / Inscription</h1>
    </div>
  );
}

export default BannerSign;
