/* eslint-disable eqeqeq */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentUserContext";
import MiniCard from "./MiniCard";

export default function LobbiesGameList({ displayLobbies, trainNumberFilter }) {
  const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/participants`, {
        user_id: currentUser.sub,
      })
      .catch((error) => console.error(error));
  };

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
                <div className="btn-container">
                  <button
                    type="button"
                    className="details-btn"
                    onClick={() => navigate(`/lobbies/${lobby.id}`)}
                  >
                    détails
                  </button>
                  <button
                    type="button"
                    className="join-btn"
                    onClick={handleSubmit}
                  >
                    rejoindre
                  </button>
                </div>
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
