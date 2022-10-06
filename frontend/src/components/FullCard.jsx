import { useState, useEffect } from "react";
import axios from "axios";
import { transDate } from "@services/DateManager";
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
    <div className="full-card">
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
        <p className="participants">
          Participants : {lobbyFullDetails.participants}
        </p>
      </div>
      <p className="mini-card-body">
        Description : {lobbyFullDetails.description}
      </p>
      <div className="travel-infos">
        <p className="travel-infos-item6">
          Date : {lobbyFullDetails.date && transDate(lobbyFullDetails.date)}{" "}
        </p>
        <p className="travel-infos-item1">
          Numéro de train : {lobbyFullDetails.train_number}
        </p>
        <p className="travel-infos-item2">
          Voiture : {lobbyFullDetails.coach_number}{" "}
        </p>
        <p className="travel-infos-item3">
          Place de l'hôte : {lobbyFullDetails.seat_number}{" "}
        </p>
        <p className="travel-infos-item4">
          Gare de départ : {lobbyFullDetails.departure}
        </p>
        <p className="travel-infos-item5">
          Gare d'arrivée : {lobbyFullDetails.arrival}{" "}
        </p>
      </div>
    </div>
  );
}

export default FullCard;
