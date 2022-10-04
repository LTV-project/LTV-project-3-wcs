import trainBanner from "@assets/images/train_banner.jpg";

function BannerSignUP() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Je crée mon compte</h1>
      <p>*champs obligatoires</p>
    </div>
  );
}

export default BannerSignUP;
