import BannerCreateLobbyGame from "@components/BannerCreateLobbyGame";
import ChoiceGameCreateLobby from "@components/ChoiceGameCreateLobby";
import Navbar from "@components/Navbar";

function LobbyGameCreation() {
  return (
    <div>
      <Navbar />
      <BannerCreateLobbyGame />
      <ChoiceGameCreateLobby />
    </div>
  );
}

export default LobbyGameCreation;
