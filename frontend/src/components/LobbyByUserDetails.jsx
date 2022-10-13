import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { transDate } from "@services/DateManager";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

function LobbyByUserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useContext(CurrentUserContext);
  const [lobbyUserDetails, setLobbyUserDetails] = useState("");
  const [participants, setParticipants] = useState();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${id}/lobbies`)
      .then((response) => response.data)
      .then((data) => setLobbyUserDetails(data));
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/lobbies/${
          lobbyUserDetails.lobby_id
        }/participants`
      )
      .then((response) => response.data)
      .then((data) => setParticipants(data));
  }, []);

  // ******************************************

  // routes et requêtes back à faire

  const handleSubmitEdit = () => {
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/participants`, {
        user_id: currentUser.sub,
        lobbie_id: id,
      })
      .then(navigate(0))
      .catch((error) => console.error(error));
  };
  const handleSubmitDelete = () => {
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/participants`)
      .then(navigate(`/user-profile/${id}`))
      .catch((error) => console.error(error));
  };

  // ********************************************

  return (
    <>
      <div className="full-card">
        <div className="creator-infos">
          <img
            src={lobbyUserDetails.avatar}
            alt="creator-avatar"
            className="creator-avatar"
          />
          <p className="creator-pseudo">Hôte : {lobbyUserDetails.host}</p>
        </div>
        <div className="game-infos">
          <p className="mini-card-body game-title">
            Jeu : {lobbyUserDetails.game}
          </p>
          <p className="mini-card-body nb-players">
            Nombre de joueurs : {lobbyUserDetails.number_of_gamers}
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
          Description : {lobbyUserDetails.description}
        </p>
        <div className="travel-infos">
          <p className="travel-infos-item6">
            Date : {lobbyUserDetails.date && transDate(lobbyUserDetails.date)}{" "}
          </p>
          <p className="travel-infos-item1">
            Numéro de train : {lobbyUserDetails.train_number}
          </p>
          <p className="travel-infos-item2">
            Voiture : {lobbyUserDetails.coach_number}{" "}
          </p>
          <p className="travel-infos-item3">
            Place de l'hôte : {lobbyUserDetails.seat_number}{" "}
          </p>
          <p className="travel-infos-item4">
            Gare de départ : {lobbyUserDetails.departure}
          </p>
          <p className="travel-infos-item5">
            Gare d'arrivée : {lobbyUserDetails.arrival}{" "}
          </p>
        </div>
      </div>
      <div className="full-card-btn-wrapper">
        <button
          type="button"
          className="edit-lobby-btn"
          onClick={handleSubmitEdit}
        >
          Modifier
        </button>
        <div className="empty-space" />

        {/* Prévoir une fonction qui affiche une alerte prévenant que la suppression entraîne annulation de la salle pour les participants inscrits. Le relier à nodemailer */}

        <button
          type="button"
          className="delete-lobby-btn"
          onClick={handleSubmitDelete}
        >
          Supprimer
        </button>
      </div>
    </>
  );
}

export default LobbyByUserDetails;
