import BannerCreateLobbyTalk from "@components/BannerCreateLobbyTalk";
import LobbyTalk from "@components/LobbyTalk";
import Navbar from "@components/Navbar";

function LobbyTalkCreation() {
  return (
    <div>
      <Navbar />
      <BannerCreateLobbyTalk />
      <div className="lobby-form-wrapper-talk">
        <LobbyTalk />
      </div>
    </div>
  );
}

export default LobbyTalkCreation;
