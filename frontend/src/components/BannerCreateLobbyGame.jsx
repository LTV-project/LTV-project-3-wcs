/* eslint-disable import/no-unresolved */
import oldCartes from "@assets/images/oldCartes.jpg";

function BannerCreateLobbyGame() {
  return (
    <div className="banner">
      <img src={oldCartes} alt="jeu de cartes dans une main" />
      <h1>Je crée ma salle de jeux</h1>
    </div>
  );
}

export default BannerCreateLobbyGame;
