/* eslint-disable eqeqeq */
import { useNavigate } from "react-router-dom";
import MiniCard from "./MiniCard";

export default function LobbiesTalkList({ displayLobbies, trainNumberFilter }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="lobbies-list-container dark-body">
        {displayLobbies &&
          displayLobbies
            .filter(
              (lobby) =>
                lobby.train_number == trainNumberFilter &&
                lobby.category === "talk"
            )
            .map((lobby) => (
              <div className="mini-card" key={lobby.id}>
                <MiniCard lobby={lobby} />
              </div>
            ))}
      </div>
      <button
        type="button"
        className="generic-btn return-btn-lobbyChoice"
        onClick={() => navigate(0)}
      >
        Retour
      </button>
    </div>
  );
}
