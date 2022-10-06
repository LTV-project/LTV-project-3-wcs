/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";
import Burger from "./burger";

function BannerSignUp() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Je crée mon compte</h1>
      <p>*champs obligatoires</p>
    </div>
  );
}

export default BannerSignUp;
