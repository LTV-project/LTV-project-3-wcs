/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function BannerProfileEdit() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Modifier mon compte</h1>
    </div>
  );
}

export default BannerProfileEdit;
