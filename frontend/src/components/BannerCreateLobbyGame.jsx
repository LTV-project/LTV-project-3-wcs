/* eslint-disable import/no-unresolved */
import gameIllu from "../images/gameIllu.jpg";

function BannerCreateLobbyGame() {
  return (
    <div className="banner">
      <img src={gameIllu} alt="jeu de cartes dans une main" />
      <h1>Je crée ma salle de jeu</h1>
    </div>
  );
}

export default BannerCreateLobbyGame;
