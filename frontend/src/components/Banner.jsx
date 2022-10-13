/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/train-banner.jpg";
import Burger from "./Burger";

function Banner() {
  return (
    <>
      <div className="banner">
        <img src={trainBanner} alt="train" />
      </div>
      <div className="burger">
        <Burger />
      </div>
    </>
  );
}

export default Banner;
