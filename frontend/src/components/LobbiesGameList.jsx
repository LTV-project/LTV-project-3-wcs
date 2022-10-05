/* eslint-disable eqeqeq */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MiniCard from "./MiniCard";

export default function LobbiesGameList({ displayLobbies, trainNumberFilter }) {
  const navigate = useNavigate();
  const [toggleDetails, setToggleDetails] = useState(false);
  const showFullDetails = () => {
    setToggleDetails(!toggleDetails);
  };
  return (
    <div>
      <div className="lobbies-list-container dark-body">
        {displayLobbies &&
          displayLobbies
            .filter(
              (lobby) =>
                trainNumberFilter == lobby.train_number &&
                lobby.category === "game"
            )
            .map((lobby) => (
              <div className="mini-card" key={lobby.id}>
                <MiniCard
                  lobby={lobby}
                  toggleDetails={toggleDetails}
                  setToggleDetails={setToggleDetails}
                />
                <div className="btn-container">
                  <button
                    type="button"
                    className="details-btn"
                    onClick={showFullDetails}
                  >
                    détails
                  </button>
                  <button type="button" className="join-btn">
                    rejoindre
                  </button>
                </div>
              </div>
              // <FullCard lobby={lobby}
              // toggleDetails={toggleDetails}
              // setToggleDetails={setToggleDetails}
              // showFullDetails={showFullDetails} />
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
