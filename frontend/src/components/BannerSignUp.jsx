/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function BannerSignUp() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Je crée mon compte</h1>
      <p>*champs obligatoires</p>
    </div>
  );
}

export default BannerSignUp;
