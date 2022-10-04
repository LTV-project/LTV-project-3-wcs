/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function BannerContact() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Contactez-nous !</h1>
    </div>
  );
}

export default BannerContact;
