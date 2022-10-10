import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { transDate } from "@services/DateManager";
import { useNavigate, useParams } from "react-router-dom";
import BannerLobbyById from "./BannerLobbyById";
import CurrentUserContext from "../contexts/CurrentUserContext";

function FullCard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [lobbyFullDetails, setLobbyFullDetails] = useState("");
  const [participants, setParticipants] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${id}`)
      .then((response) => response.data)
      .then((data) => setLobbyFullDetails(data));
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/lobbies/${id}/participants`)
      .then((response) => response.data)
      .then((data) => setParticipants(data));
  }, []);
  const handleSubmit = () => {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/participants`, {
        user_id: currentUser.sub,
        lobbie_id: id,
      })
      .then(navigate(0))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <BannerLobbyById lobbyFullDetails={lobbyFullDetails} />
      <div className="full-card">
        <div className="creator-infos">
          <img
            src="https://placekitten.com/g/50/50"
            alt="creator-avatar"
            className="creator-avatar"
          />
          <p className="creator-pseudo">Hôte : {lobbyFullDetails.host}</p>
        </div>
        <div className="game-infos">
          <p className="mini-card-body game-title">
            Jeu : {lobbyFullDetails.game}
          </p>
          <p className="mini-card-body nb-players">
            Nombre de joueurs : {lobbyFullDetails.number_of_gamers}
          </p>
          <ul className="participants nb-users">
            Participants :
            {participants &&
              participants.map((participant) => (
                <li className="participant" key={participant.id}>
                  {participant.participants}
                </li>
              ))}
          </ul>
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
      <div className="full-card-btn-wrapper">
        <button
          type="button"
          className="join-btn join-btn-full-card"
          onClick={handleSubmit}
        >
          rejoindre
        </button>
        <div className="empty-space" />
        <button
          type="button"
          className="generic-btn details-btn return-lobby-search-btn"
          onClick={() => navigate(-1)}
        >
          Revenir à la recherche
        </button>
      </div>
    </>
  );
}

export default FullCard;
