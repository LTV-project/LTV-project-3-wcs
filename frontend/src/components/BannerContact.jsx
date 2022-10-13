/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";
import Burger from "./Burger";

function BannerContact() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Contactez-nous !</h1>
    </div>
  );
}

export default BannerContact;
