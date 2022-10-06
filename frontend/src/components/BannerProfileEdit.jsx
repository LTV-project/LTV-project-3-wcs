/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";
import Burger from "./burger";

function BannerProfileEdit() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Modifier mon compte</h1>
    </div>
  );
}

export default BannerProfileEdit;
