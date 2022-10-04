/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function BannerSign() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Connexion / Inscription</h1>
      <p>*champs obligatoires</p>
    </div>
  );
}

export default BannerSign;
