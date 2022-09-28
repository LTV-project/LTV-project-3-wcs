import trainBanner from "template-fullstack/assets/images/train_banner.jpg";

function Banner() {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
    </div>
  );
}

export default Banner;
