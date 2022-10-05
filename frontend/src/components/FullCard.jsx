import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FullCard() {
  const { id } = useParams();
  const [lobbyFullDetails, setLobbyFullDetails] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${id}`)
      .then((response) => response.data)
      .then((data) => setLobbyFullDetails(data));
  }, []);

  return (
    <>
      <div className="creator-infos">
        <img
          src="https://placekitten.com/g/50/50"
          alt="creator-avatar"
          className="creator-avatar"
        />
        <p className="creator-pseudo">Hôte : {lobbyFullDetails.pseudo}</p>
      </div>
      <div className="game-infos">
        <p className="mini-card-body">Jeu : {lobbyFullDetails.game}</p>
        <p className="mini-card-body">
          Nombre de joueurs : {lobbyFullDetails.number_of_gamers}
        </p>
        <p className="mini-card-body">
          Participants : {lobbyFullDetails.participants}
        </p>
      </div>
      <p className="mini-card-body">
        Description : {lobbyFullDetails.description}
      </p>
    </>
  );
}

export default FullCard;
