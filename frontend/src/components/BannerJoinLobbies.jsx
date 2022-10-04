/* eslint-disable import/no-unresolved */
import joinBanner from "@assets/images/talk_banner.jpg";

function BannerJoinLobbies() {
  return (
    <div className="banner-lobbies banner">
      <img src={joinBanner} alt="train" />
      <h1>Rejoindre une salle</h1>
    </div>
  );
}

export default BannerJoinLobbies;
