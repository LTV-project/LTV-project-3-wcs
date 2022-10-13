/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";
import Burger from "./Burger";

function BannerProfile() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Mon compte</h1>
    </div>
  );
}

export default BannerProfile;
