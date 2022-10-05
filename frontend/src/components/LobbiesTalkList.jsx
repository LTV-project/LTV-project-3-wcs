/* eslint-disable eqeqeq */
import { useNavigate } from "react-router-dom";

export default function LobbiesTalkList({ displayLobbies, trainNumberFilter }) {
  const navigate = useNavigate();
  return (
    <div className="dark-body">
      <div className="lobbies-list-container">
        {displayLobbies &&
          displayLobbies
            .filter(
              (lobby) =>
                lobby.train_number == trainNumberFilter &&
                lobby.category === "talk"
            )
            .map((lobby) => (
              <div className="mini-card" key={lobby.id}>
                <div className="creator-infos">
                  <img
                    src="https://placekitten.com/g/50/50"
                    alt="creator-avatar"
                    className="creator-avatar"
                  />
                  <p className="creator-pseudo">Hôte : {lobby.pseudo}</p>
                </div>
                <p className="mini-card-body">Thème : {lobby.theme}</p>
                <p className="mini-card-body">
                  Participants : {lobby.participants}
                </p>
                <p className="mini-card-body">
                  Description : {lobby.description}
                </p>
                <div className="btn-container">
                  <button type="button" className="details-btn">
                    détails
                  </button>
                  <button type="button" className="join-btn">
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
        Retour
      </button>
    </div>
  );
}
