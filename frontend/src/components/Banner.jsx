/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
    </div>
  );
}

export default Banner;
