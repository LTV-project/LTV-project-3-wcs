/* eslint-disable eqeqeq */
import { useNavigate } from "react-router-dom";
import MiniCard from "./MiniCard";

export default function LobbiesGameList({ displayLobbies, trainNumberFilter }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="lobbies-list-container dark-body">
        {trainNumberFilter &&
          displayLobbies &&
          displayLobbies
            .filter(
              (lobby) =>
                trainNumberFilter == lobby.train_number &&
                lobby.category === "game"
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
        Revenir à la recherche
      </button>
    </div>
  );
}
