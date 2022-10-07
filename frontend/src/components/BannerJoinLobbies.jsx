/* eslint-disable import/no-unresolved */
import joinBanner from "@assets/images/talk_banner.jpg";
import Burger from "./Burger";

function BannerJoinLobbies() {
  return (
    <div className="banner-lobbies banner">
      <img src={joinBanner} alt="train" />
      <div className="burger">
        <Burger />
      </div>
      <h1>Rejoindre une salle</h1>
    </div>
  );
}

export default BannerJoinLobbies;
