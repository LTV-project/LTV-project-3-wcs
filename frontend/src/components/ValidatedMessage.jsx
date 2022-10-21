import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { transDate } from "../services/DateManager";

function ValidatedMessage() {
  const [lobbyCreateByUser, setLobbyCreateUser] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [name, setName] = useState("");
  const navigate = useNavigate();
  // import useLocation pour récupérer les données du composant précédent LobbyGame ou LobbyTalk
  const location = useLocation();
  const myId = window.localStorage.getItem("id");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${myId}`)
      .then((response) => {
        setName(response.data.pseudo);
        axios
          .get(
            `${import.meta.env.VITE_BACKEND_URL}/lobbies/${location.state.id}`
          )
          .then((res) => res.data)
          .then((data) => setLobbyCreateUser(data))
          .catch((error) => console.error(error));
      });
  }, []);

  // Création useEffect pour le timeOut de 10sec avec retour page d'accueil
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 10000);
  }, []);

  return (
    <div className="validated-message-container">
      <h2 className="validated-message-title">Félicitations {name || ""} !</h2>
      {lobbyCreateByUser.category === "game" ? (
        <div className="validated-message-text">
          <p>
            Vous venez de créer la salle de jeu :
            {lobbyCreateByUser.name && lobbyCreateByUser.name}
          </p>
          <p>N'oubliez pas d'apporter votre jeu !</p>
          <p>Rappels concernant votre voyage :</p>
          <p>
            Date du voyage :
            {lobbyCreateByUser.date && transDate(lobbyCreateByUser.date)}
          </p>
          <p>
            Numéro de train :{" "}
            {lobbyCreateByUser.train_number && lobbyCreateByUser.train_number}
          </p>
          <p>
            Numéro de voiture :{" "}
            {lobbyCreateByUser.coach_number && lobbyCreateByUser.coach_number}
          </p>
        </div>
      ) : (
        <div className="validated-message-text">
          <p>Vous venez de créer la salle de discussion : </p>
          {lobbyCreateByUser.name && lobbyCreateByUser.name}
          <p>Rappels concernant votre voyage :</p>
          <p>
            Date du voyage :
            {lobbyCreateByUser.date && transDate(lobbyCreateByUser.date)}
          </p>
          <p>
            Numéro de train :{" "}
            {lobbyCreateByUser.train_number && lobbyCreateByUser.train_number}
          </p>
          <p>
            Numéro de voiture :{" "}
            {lobbyCreateByUser.coach_number && lobbyCreateByUser.coach_number}
          </p>
        </div>
      )}
    </div>
  );
}

export default ValidatedMessage;
