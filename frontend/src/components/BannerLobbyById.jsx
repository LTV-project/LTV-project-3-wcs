/* eslint-disable import/no-unresolved */
import trainBanner from "@assets/images/trainbanner.jpg";

function BannerLobbyById({ lobbyFullDetails }) {
  return (
    <div className="banner">
      <img src={trainBanner} alt="train" />
      <h1>Salle {lobbyFullDetails.name} : détails</h1>
    </div>
  );
}

export default BannerLobbyById;
